import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    DocumentCountryId: null,
    investments: [
      {investmentName: 'five'}
    ],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investments',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another investment',
      },

      hideExpression: (model: any, formState: any) => {
        return this.model.DocumentCountryId == "123"
      },

      // Test scenario #1 (uncomment the above 3 lines)
      // 1) click 'Add Another Investment Button' and type 'six' for
      //    investment name
      // 2) type '123' in DocumentCountryId (hide form array)
      // 3) type '1234' in DocumentCountryId (re-display form array)
      // ** Results **
      //    displayed data is incorrect!! => six was replaced with five,
      //                                     so five is duplicated
      //    model data is correct
      //    form data is incorrect!! => six was deleted, 
      //                                so only one form array item
      fieldArray: {
        fieldGroupClassName: 'row',

        //hideExpression: (model: any, formState: any) => {
          //return this.model.DocumentCountryId == "123"
        //},

        // Test scenario #2 (uncomment the above 3 lines)
        // 1) click 'Add Another Investment Button' and type 'six' for
        //    investment name
        // 2) type '123' in DocumentCountryId (hide form array)
        // ** Results **
        //    Two remove buttons and 
        //    Add Another Investment buttons
        //    are still visible (not good!)
        // 3) type '1234' in DocumentCountryId (re-display form array)
        // ** Results **
        //    model data is correct
        //    form data is incorrect!! => five was replaced with six,
        //                                so six is duplicated
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'investmentName',

            //hideExpression: (model: any, formState: any) => {
              //return this.model.DocumentCountryId == "123"
            //},

            // Test scenario #3 (uncomment the above 3 lines)
            // 1) click 'Add Another Investment Button' and type 'six' for
            //    investment name
            // 2) type '123' in DocumentCountryId (hide form array)
            // ** Results **
            //    Two remove buttons and 
            //    Add Another Investment buttons 
            //    are still visible (not good!)
            // 3) type '1234' in DocumentCountryId (re-display form array)
            // ** Results **
            //    model data is correct!
            //    form data  is correct!

            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },            
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'investmentName1',
            templateOptions: {
              label: 'Pepe:',
              required: true,
            },            
          },  
        ],
      },
    },
    {
      key: 'DocumentCountryId',
      type: 'input',
      templateOptions: {
        label: 'DocumentCountryId',
        placeholder: "set to '123' to hide array"
      },
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */