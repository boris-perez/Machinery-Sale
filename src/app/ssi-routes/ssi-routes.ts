/**
 * @author alain quinones
 */
import {Routes} from '@angular/router';
import {SsiHomeComponent} from '../ssi-home/ssi-home.component';
import {SsiOrganizationComponent} from '../ssi-organization/ssi-organization.component';

export const ROUTES_CONFIG: Routes = [
  {path: 'home', component: SsiHomeComponent},
  {path: 'organization', component: SsiOrganizationComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
