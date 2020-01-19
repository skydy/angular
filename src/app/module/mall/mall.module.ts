import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallComponent } from './mall.component';


@NgModule({
  declarations: [MallComponent],
  exports:[MallComponent],
  imports: [
    CommonModule,
    MallRoutingModule
  ]
})
export class MallModule { }
