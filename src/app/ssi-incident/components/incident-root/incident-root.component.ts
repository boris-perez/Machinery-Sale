/**
 * @author alain quinones
 */

import {Component, OnInit} from '@angular/core';
import {IncidentReportService} from '../../services/incident-report.service';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Incident} from '../../api/domain/Incident';
import {IncidentDeleteService} from '../../services/incident-delete.service';
import {IncidentCreateService} from '../../services/incident-create.service';

@Component({
  selector: 'incident-root',
  templateUrl: './incident-root.component.html',
  styleUrls: ['./incident-root.component.scss']
})
export class IncidentRootComponent implements OnInit {

  public disabledReports: boolean;

  public incidents: Incident[];

  constructor(private _incidentReportService: IncidentReportService,
              private _incidentHttpService: IncidentsHttpService,
              private _incidentDeleteService: IncidentDeleteService,
              private _incidentCreateService: IncidentCreateService) {
    this.disabledReports = true;

  }

  ngOnInit() {
    this._initialize();
  }

  public onReportAction(event: any): void {
    this._incidentReportService.subject.next();
  }

  private _initialize(): void {
    this._incidentHttpService.doFindAll().subscribe(
      (incidents: Incident[]) => {
        this.incidents = incidents;

        this.disabledReports = !(this.incidents.length > 0);
      }
    );

    this._incidentDeleteService.subject.asObservable().subscribe(
      (incident: Incident) => {
        if (incident) {
          const index = this.incidents.findIndex(value => value.id === incident.id);
          if (index > -1) {
            this.incidents.splice(index, 1);
          }

          this.disabledReports = !(this.incidents.length > 0);
        }
      }
    );

    this._incidentCreateService.subject.asObservable().subscribe(
      (incident: Incident) => {
        if (incident) {
          this.incidents.push(incident);

          this.disabledReports = !(this.incidents.length > 0);
        }
      }
    );
  }
}
