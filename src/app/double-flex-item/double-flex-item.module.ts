import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleFlexItemComponent } from './double-flex-item.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [DoubleFlexItemComponent],
  exports: [
    DoubleFlexItemComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class DoubleFlexItemModule { }
