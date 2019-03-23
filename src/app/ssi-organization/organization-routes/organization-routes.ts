/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {OrganizationRootComponent} from '../organization-root/organization-root.component';

import {OrganizationMainComponent} from '../organization-main/organization-main.component';


export const ORGANIZATION_ROUTES_CONFIG: Routes = [
  {
    path: 'organization',
    component: OrganizationRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: OrganizationMainComponent}
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
