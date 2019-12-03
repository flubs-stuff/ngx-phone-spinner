import {ModuleWithProviders, NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxPhoneSpinnerComponent} from './ngx-phone-spinner/ngx-phone-spinner.component';
import {RangePipe} from './pipes/range.pipe';

export * from './models/ngx-phone-spinner.model';
export * from './models/lock-options.model';

export * from './ngx-phone-spinner/ngx-phone-spinner.component';

@NgModule({
  declarations: [
    NgxPhoneSpinnerComponent,
    RangePipe
  ],
  exports: [
    NgxPhoneSpinnerComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class NgxPhoneSpinnerModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: NgxPhoneSpinnerModule,
      providers: []
    };
  }
}
