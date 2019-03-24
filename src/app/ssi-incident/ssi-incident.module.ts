/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {IncidentRoutesModule} from './incident-routes/incident-routes.module';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentMainComponent} from './incident-main/incident-main.component';
import {IncidentRootComponent} from './incident-root/incident-root.component';


@NgModule({
  declarations: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IncidentRoutesModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentMainComponent
  ]
})
export class SsiIncidentModule {
}
