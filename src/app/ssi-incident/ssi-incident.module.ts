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
    IncidentRoutesModule,
    HttpClientModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentMainComponent
  ],
  providers: [
    IncidentsHttpService
  ]
})
export class SsiIncidentModule {
}
