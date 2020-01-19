import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MallComponent } from './mall.component'

const routes: Routes = [
    {path:'',component:MallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
