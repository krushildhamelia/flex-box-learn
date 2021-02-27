import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleFlexItemMultipleComponent } from './double-flex-item-multiple.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [DoubleFlexItemMultipleComponent],
  exports: [
    DoubleFlexItemMultipleComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class DoubleFlexItemMultipleModule { }
