import {ModuleWithProviders, NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxBadPhoneSpinnerComponent} from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import {RangePipe} from './pipes/range.pipe';

export * from './models/ngx-bad-phone-spinner.model';
export * from './models/lock-options.model';

export * from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';

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
    FormsModule
  ],
  providers: []
})
export class NgxBadPhoneSpinnerModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: NgxBadPhoneSpinnerModule,
      providers: []
    };
  }
}
