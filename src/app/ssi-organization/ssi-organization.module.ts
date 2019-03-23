/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {OrganizationRoutesModule} from './organization-routes/organization-routes.module';

import {SsiOrganizationComponent} from './ssi-organization.component';

import {OrganizationRootComponent} from './organization-root/organization-root.component';
import {OrganizationMainComponent} from './organization-main/organization-main.component';


@NgModule({
  declarations: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    OrganizationRoutesModule,
  ],
  exports: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent
  ]
})
export class SsiOrganizationModule {
}
