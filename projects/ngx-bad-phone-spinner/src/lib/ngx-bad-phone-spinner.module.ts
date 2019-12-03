import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxBadPhoneSpinnerComponent} from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import {RangeModule} from './range/range.module';

@NgModule({
  declarations: [
    NgxBadPhoneSpinnerComponent
  ],
  entryComponents: [
    NgxBadPhoneSpinnerComponent
  ],
  exports: [
    NgxBadPhoneSpinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RangeModule
  ],
  providers: []
})
export class NgxBadPhoneSpinnerModule { }
