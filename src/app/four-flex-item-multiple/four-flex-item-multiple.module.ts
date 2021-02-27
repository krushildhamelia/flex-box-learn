import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourFlexItemMultipleComponent } from './four-flex-item-multiple.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [FourFlexItemMultipleComponent],
  exports: [
    FourFlexItemMultipleComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class FourFlexItemMultipleModule { }
