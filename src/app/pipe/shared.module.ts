//news.module.ts

import { NgModule } from '@angular/core';
import { Portrait } from './news.pipe';
import { Homes } from './home.pipe';


@NgModule({
  declarations: [
    Portrait,
    Homes
  ],
  exports: [
    Portrait,
    Homes
  ]
})
export class SharedModule {

}