/**
 * @author alain quinones
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IncidentRoutesModule} from './routes/incident-routes.module';

import {IncidentsHttpService} from './services/incidents-http-service';

import {SsiIncidentComponent} from './ssi-incident.component';
import {IncidentRootComponent} from './components/incident-root/incident-root.component';
import {IncidentListComponent} from './components/incident-list/incident-list.component';
import {IncidentCreateComponent} from './components/incident-create/incident-create.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {EmployeesHttpService} from './services/employees-http-service';


@NgModule({
  declarations: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IncidentRoutesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  exports: [
    SsiIncidentComponent,
    IncidentRootComponent,
    IncidentListComponent,
    IncidentCreateComponent
  ],
  providers: [
    IncidentsHttpService,
    EmployeesHttpService
  ]
})
export class SsiIncidentModule {
}
