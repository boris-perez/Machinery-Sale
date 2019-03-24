/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {OrganizationRootComponent} from '../organization-root/organization-root.component';

import {OrganizationMainComponent} from '../organization-main/organization-main.component';
import {OrganizationDepartmentComponent} from '../organization-department/organization-department.component';
import {OrganizationChargeComponent} from '../organization-charge/organization-charge.component';


export const ORGANIZATION_ROUTES_CONFIG: Routes = [
  {
    path: 'organization',
    component: OrganizationRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: OrganizationMainComponent},
          {path: 'department', component: OrganizationDepartmentComponent},
          {path: 'charge', component: OrganizationChargeComponent}
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
