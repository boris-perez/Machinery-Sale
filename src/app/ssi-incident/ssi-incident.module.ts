/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {IncidentRoutesModule} from './routes/incident-routes.module';

import {IncidentsHttpService} from './services/incidents-http-service';
import {EmployeesHttpService} from './services/employees-http-service';
import {IncidentDeleteService} from './components/incident-delete/incident-delete.service';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentRootComponent} from './components/incident-root/incident-root.component';
import {IncidentListComponent} from './components/incident-list/incident-list.component';
import {IncidentCreateComponent} from './components/incident-create/incident-create.component';
import {IncidentDeleteComponent} from './components/incident-delete/incident-delete.component';


@NgModule({
  declarations: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent,
    IncidentDeleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IncidentRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent,
    IncidentDeleteComponent
  ],
  providers: [
    IncidentsHttpService,
    EmployeesHttpService,
    IncidentDeleteService
  ],
  entryComponents: [
    IncidentDeleteComponent
  ]
})
export class SsiIncidentModule {
}
