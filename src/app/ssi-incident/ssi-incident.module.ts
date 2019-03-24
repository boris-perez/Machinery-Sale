/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {IncidentRoutesModule} from './routes/incident-routes.module';

import {IncidentsHttpService} from './services/incidents-http-service';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentRootComponent} from './components/incident-root/incident-root.component';
import {IncidentListComponent} from './components/incident-list/incident-list.component';


@NgModule({
  declarations: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IncidentRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent
  ],
  providers: [
    IncidentsHttpService
  ]
})
export class SsiIncidentModule {
}
