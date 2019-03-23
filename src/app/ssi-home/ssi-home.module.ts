/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HomeRoutesModule} from './home-routes/home-routes.module';

import {SsiHomeComponent} from './ssi-home.component';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeRootComponent} from './home-root/home-root.component';
import {HomeTestComponent} from './home-test/home-test.component';


@NgModule({
  declarations: [
    SsiHomeComponent,
    HomeRootComponent,
    HomeMainComponent,
    HomeTestComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeRoutesModule,
  ],
  exports: [
    SsiHomeComponent,
    HomeRootComponent,
    HomeMainComponent,
    HomeTestComponent
  ]
})
export class SsiHomeModule {
}
