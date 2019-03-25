import {Injectable, OnDestroy} from '@angular/core';
import {EmployeesHttpService} from './ssi-incident/services/employees-http-service';
import {Subscription} from 'rxjs';
import {Employee, EmployeeDTO} from './ssi-incident/api/domain/Employee';
import {unsubscribe} from './ssi-shared/utils/unsubscribe.function';

@Injectable({
  providedIn: 'root'
})
export class LoadDummyEmployeesService implements OnDestroy {

  private _employeesHttpServiceSubscription: Subscription;
  private _employeesSubscription: Subscription;

  private _dummyEmployees: EmployeeDTO[];

  constructor(private _employeesHttpService: EmployeesHttpService) {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._employeesHttpServiceSubscription);
    unsubscribe(this._employeesSubscription);
  }

  private _initialize(): void {
    this._dummyEmployees = [
      new EmployeeDTO('123456', 'Juan', 'Pinto', 'Av. america', '1234567'),
      new EmployeeDTO('654321', 'Carlos', 'Terrazas', 'Quillacollo', '0987654'),
      new EmployeeDTO('098765', 'Miguel', 'Terceros', 'Vinto', '1029384'),
      new EmployeeDTO('567890', 'Claudia', 'Panozo', 'Av. Suecia', '6574839'),
      new EmployeeDTO('102938', 'Lucia', 'Teran', 'Villa Granado', '1825467'),
      new EmployeeDTO('564738', 'Pedro', 'Perez', 'Av. Blanco Galindo', '9015463'),
    ];

    this._employeesHttpServiceSubscription = this._employeesHttpService.doFindAll().subscribe(
      (employees: Employee[]) => {
        if (employees.length <= 1) {
          this._dummyEmployees.forEach(
            (employeeDTO: EmployeeDTO) => {
              this._employeesSubscription = this._employeesHttpService.doInsert(employeeDTO).subscribe();
            }
          );
        }
      }
    );
  }
}
