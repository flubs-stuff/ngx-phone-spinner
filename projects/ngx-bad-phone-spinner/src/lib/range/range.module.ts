import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {RangePipe} from './range.pipe';

@NgModule({
  declarations: [
    RangePipe
  ],
  exports: [
    RangePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RangeModule {}
