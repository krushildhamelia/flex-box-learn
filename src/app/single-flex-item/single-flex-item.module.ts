import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFlexItemComponent } from './single-flex-item.component';
import {FlexComponentModule} from 'app/flex-component/flex-component.module';



@NgModule({
  declarations: [SingleFlexItemComponent],
  exports: [
    SingleFlexItemComponent
  ],
  imports: [
    CommonModule,
    FlexComponentModule
  ]
})
export class SingleFlexItemModule { }
