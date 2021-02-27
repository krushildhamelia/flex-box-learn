import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexHomeComponent } from './flex-home.component';
import {RouterModule, Routes} from '@angular/router';
import {SingleFlexItemModule} from 'app/single-flex-item/single-flex-item.module';
import {DoubleFlexItemModule} from 'app/double-flex-item/double-flex-item.module';
import {DoubleFlexItemMultipleModule} from 'app/double-flex-item-multiple/double-flex-item-multiple.module';
import {DoubleFlexItemMultipleWithEqualSizeModule} from 'app/double-flex-item-multiple-with-equal-size/double-flex-item-multiple-with-equal-size.module';
import {FourFlexItemMultipleModule} from 'app/four-flex-item-multiple/four-flex-item-multiple.module';
import {FourFlexItemMultipleWithEqualSizeModule} from 'app/four-flex-item-multiple-with-equal-size/four-flex-item-multiple-with-equal-size.module';

const routes: Routes = [
  {
    path: '',
    component: FlexHomeComponent,
  }
];

@NgModule({
  declarations: [FlexHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SingleFlexItemModule,
    DoubleFlexItemModule,
    DoubleFlexItemMultipleModule,
    DoubleFlexItemMultipleWithEqualSizeModule,
    FourFlexItemMultipleModule,
    FourFlexItemMultipleWithEqualSizeModule,
  ]
})
export class FlexHomeModule { }
