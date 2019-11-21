import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxBadPhoneSpinnerComponent } from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';

@NgModule({
  declarations: [
    NgxBadPhoneSpinnerComponent
  ],
  exports: [
    NgxBadPhoneSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxBadPhoneSpinnerModule { }
