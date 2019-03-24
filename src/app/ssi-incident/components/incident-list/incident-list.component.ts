/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Incident} from '../../api/domain/Incident';

@Component({
  selector: 'incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit, OnDestroy {

  public incidents: Incident[];

  private _incidentsSubscription: Subscription;

  constructor(private _incidentsHttpService: IncidentsHttpService) {
    this.incidents = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._incidentsSubscription);
  }

  private _initialize(): void {
    this._incidentsSubscription = this._incidentsHttpService.doFindAll().subscribe(
      (incidents: Incident[]) => {
        this.incidents = incidents;
      }
    );
  }
}
