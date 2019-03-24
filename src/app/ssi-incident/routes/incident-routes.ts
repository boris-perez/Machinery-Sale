/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {IncidentRootComponent} from '../components/incident-root/incident-root.component';
import {IncidentMainComponent} from '../components/incident-main/incident-main.component';


export const INCIDENT_ROUTES_CONFIG: Routes = [
  {
    path: 'incident',
    component: IncidentRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: IncidentMainComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
