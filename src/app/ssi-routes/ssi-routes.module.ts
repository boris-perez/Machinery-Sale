/**
 * @author alain quinones
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_CONFIG} from './ssi-routes';
import {SsiHomeModule} from '../ssi-home/ssi-home.module';
import {SsiOrganizationModule} from '../ssi-organization/ssi-organization.module';


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES_CONFIG),
    SsiHomeModule,
    SsiOrganizationModule
  ],
  exports: [RouterModule]
})
export class SsiRoutesModule {

}
