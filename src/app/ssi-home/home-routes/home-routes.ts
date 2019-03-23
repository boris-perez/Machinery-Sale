/**
 * @author alain.quinones
 */

import {Routes} from '@angular/router';
import {HomeRootComponent} from '../home-root/home-root.component';

import {HomeMainComponent} from '../home-main/home-main.component';
import {HomeTestComponent} from '../home-test/home-test.component';

export const HOME_ROUTES_CONFIG: Routes = [
  {
    path: 'home',
    component: HomeRootComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'main', component: HomeMainComponent},
          {path: 'test', component: HomeTestComponent},
        ]
      },
      {path: '**', redirectTo: ''}
    ]
  }
];
