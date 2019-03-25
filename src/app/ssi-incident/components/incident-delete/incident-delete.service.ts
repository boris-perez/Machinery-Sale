import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Incident} from '../../api/domain/Incident';

@Injectable()
export class IncidentDeleteService {

  private _incidentSubject: Subject<Incident>;

  constructor() {
    this._incidentSubject = new Subject<Incident>();
  }

  get subject(): Subject<Incident> {
    return this._incidentSubject;
  }

}
