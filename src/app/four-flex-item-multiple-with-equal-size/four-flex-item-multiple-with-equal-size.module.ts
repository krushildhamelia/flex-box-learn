import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourFlexItemMultipleWithEqualSizeComponent } from './four-flex-item-multiple-with-equal-size.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [FourFlexItemMultipleWithEqualSizeComponent],
  exports: [
    FourFlexItemMultipleWithEqualSizeComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class FourFlexItemMultipleWithEqualSizeModule { }
