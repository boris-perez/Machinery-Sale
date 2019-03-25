import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class IncidentReportService {

  private _incidentSubject: BehaviorSubject<void>;

  constructor() {
    this._incidentSubject = new BehaviorSubject<void>(undefined);
  }

  get subject(): Subject<void> {
    return this._incidentSubject;
  }

}
