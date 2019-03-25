/**
 * @author alain quinones
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {IncidentsHttpService} from '../../services/incidents-http-service';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Incident, IncidentDTO} from '../../api/domain/Incident';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'incident-create',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.scss']
})
export class IncidentCreateComponent implements OnInit, OnDestroy {

  public incidentFormGroup: FormGroup;
  public incident: Incident;

  private _incidentsSubscription: Subscription;

  constructor(private _incidentsHttpService: IncidentsHttpService,
              private _formBuilder: FormBuilder) {
    this._initForm();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    unsubscribe(this._incidentsSubscription);
  }

  public onSubmit(): void {
    const incidentDTO: IncidentDTO = this.incidentFormGroup.value;
    this._incidentsSubscription = this._incidentsHttpService.doInsert(incidentDTO).subscribe(
      (incident: Incident) => {
        this.incident = incident;
        console.log(incident);
      }
    );
  }

  private _initForm(): void {
    this.incidentFormGroup = this._formBuilder.group({
      name: [null, [Validators.required]],
      description: [null],
      date: [null],
      type: [null],
      severity: [null],
      observation: [null],
      employeeId: [null]
    });
  }
}
