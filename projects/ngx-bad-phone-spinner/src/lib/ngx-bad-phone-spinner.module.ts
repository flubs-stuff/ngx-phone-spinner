import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxBadPhoneSpinnerComponent} from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import {RangePipe} from './range/range.pipe';

@NgModule({
  declarations: [
    NgxBadPhoneSpinnerComponent,
    RangePipe
  ],
  entryComponents: [
    NgxBadPhoneSpinnerComponent
  ],
  exports: [
    NgxBadPhoneSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class NgxBadPhoneSpinnerModule { }
