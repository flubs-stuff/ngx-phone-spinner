import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxSmartModalModule } from 'ngx-smart-modal';

import { NgxBadPhoneSpinnerComponent } from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import { NgxBadModalComponent } from './ngx-bad-modal/ngx-bad-modal.component';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [
    NgxBadModalComponent,
    NgxBadPhoneSpinnerComponent,
    RangePipe
  ],
  exports: [
    NgxBadModalComponent,
    NgxBadPhoneSpinnerComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot()
  ]
})
export class NgxBadPhoneSpinnerModule { }
