import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div *ngIf="!field.hide" class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>
        <button class="btn btn-primary" type="button" (click)="add(field)">{{ to.addText }}</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      // <button class="btn btn-primary" type="button" (click)="addTest(field.fieldGroup, field)">{{ to.addText }}</button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  addTest(val, field) {        
    console.log(field)
    console.log(val)
    field.fieldArray.fieldGroup[0].hide = true
    if (val && val.length > 0)
      val[0].fieldGroup[0].hide = true;    
    this.add();
    /*
    console.log(val[0])    
    if (val && val[0])
      val[0].hide = false;
    console.log('test')
    */
  }
  
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */