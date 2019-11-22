import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { NgxBadPhoneSpinnerComponent } from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [
    NgxBadPhoneSpinnerComponent,
    RangePipe
  ],
  exports: [
    NgxBadPhoneSpinnerComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot()
  ]
})
export class NgxBadPhoneSpinnerModule { }
