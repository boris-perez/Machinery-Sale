import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SsiRoutesModule} from './ssi-routes/ssi-routes.module';

import {SsiComponent} from './ssi.component';


@NgModule({
  declarations: [
    SsiComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SsiRoutesModule
  ],
  providers: [],
  bootstrap: [SsiComponent]
})
export class SsiModule {
}
