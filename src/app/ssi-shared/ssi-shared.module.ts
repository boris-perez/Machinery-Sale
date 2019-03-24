/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {SharedMenuComponent} from './shared-menu/shared-menu.component';


@NgModule({
  declarations: [
    SharedMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    SharedMenuComponent
  ]
})
export class SsiSharedModule {
}
