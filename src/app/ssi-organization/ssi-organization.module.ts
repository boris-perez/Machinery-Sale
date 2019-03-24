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
import {OrganizationDepartmentComponent} from './organization-department/organization-department.component';
import {OrganizationChargeComponent} from './organization-charge/organization-charge.component';


@NgModule({
  declarations: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationChargeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    OrganizationRoutesModule,
  ],
  exports: [
    SsiOrganizationComponent,
    OrganizationRootComponent,
    OrganizationMainComponent,
    OrganizationDepartmentComponent,
    OrganizationChargeComponent

  ]
})
export class SsiOrganizationModule {
}
