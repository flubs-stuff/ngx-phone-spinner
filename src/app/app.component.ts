import { Component } from '@angular/core';

import { NgxBadPhoneSpinnerOptions } from '../../projects/ngx-bad-phone-spinner/src/lib/ngx-bad-phone-spinner.model';

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

  constructor() {
    this.badOptions = new NgxBadPhoneSpinnerOptions();

    this.badderOptions = new NgxBadPhoneSpinnerOptions();
    this.badderOptions.locks = 'random';
    this.badderOptions.unlocks = 'random';
  }

  submit():void {
    alert(this.value);
  }

  change(value:string):void {
    this.value = value;
  }
}
