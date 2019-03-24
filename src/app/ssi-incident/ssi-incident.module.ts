/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {IncidentRoutesModule} from './routes/incident-routes.module';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentMainComponent} from './components/incident-main/incident-main.component';
import {IncidentRootComponent} from './components/incident-root/incident-root.component';


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
