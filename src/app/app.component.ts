import {Component} from '@angular/core';

import {LockOptions, NgxBadPhoneSpinnerOptions} from 'ngx-bad-phone-spinner';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  public title:string = 'NgxBadPhoneSpinner';

  public value:string = '2055550786';

  public badOptions:NgxBadPhoneSpinnerOptions;
  public badderOptions:NgxBadPhoneSpinnerOptions;
  public baddestOptions:NgxBadPhoneSpinnerOptions;
  public fuOptions:NgxBadPhoneSpinnerOptions;

  constructor() {
    this.badOptions = new NgxBadPhoneSpinnerOptions();

    this.badderOptions = new NgxBadPhoneSpinnerOptions();

    this.badderOptions.locks = [
      LockOptions.MANUAL
    ];

    this.badderOptions.unlocks = [
      LockOptions.SHUFFLE
    ];

    this.badderOptions.modals = [
      {
        title:   'Confirm',
        text:    'Are you sure you want to lock this digit?',
        cancel:  'No',
        confirm: 'Yes'
      }
    ];

    this.baddestOptions = new NgxBadPhoneSpinnerOptions();

    this.baddestOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.RANDOM
    ];

    this.baddestOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.RANDOM
    ];

    this.fuOptions = new NgxBadPhoneSpinnerOptions();

    this.fuOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];

    this.fuOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];
  }

  submit():void {
    alert(this.value);
  }

  change(value:string):void {
    this.value = value;
  }
}
