import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RangePipe} from './range.pipe';

@NgModule({
  exports: [
    RangePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RangePipe
  ]
})
export class RangeModule {}
