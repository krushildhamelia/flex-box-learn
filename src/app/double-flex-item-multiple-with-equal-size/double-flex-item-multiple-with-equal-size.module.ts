import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleFlexItemMultipleWithEqualSizeComponent } from './double-flex-item-multiple-with-equal-size.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [DoubleFlexItemMultipleWithEqualSizeComponent],
  exports: [
    DoubleFlexItemMultipleWithEqualSizeComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class DoubleFlexItemMultipleWithEqualSizeModule { }
