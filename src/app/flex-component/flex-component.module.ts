import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexComponentComponent} from 'app/flex-component/flex-component.component';

@NgModule({
  declarations: [
    FlexComponentComponent,
  ],
  exports: [
    FlexComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlexComponentModule { }
