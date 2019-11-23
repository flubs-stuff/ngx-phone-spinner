import {Component} from '@angular/core';

import {LockOptions, NgxBadPhoneSpinnerOptions} from '../../projects/ngx-bad-phone-spinner/src/lib/ngx-bad-phone-spinner.model';

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

    this.baddestOptions = new NgxBadPhoneSpinnerOptions();

    this.baddestOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.RANDOM
    ];

    this.baddestOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.RANDOM
    ];

    this.fuOptions = new NgxBadPhoneSpinnerOptions();

    this.fuOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];

    this.fuOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
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
