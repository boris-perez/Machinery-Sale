import {IncidentTypeEnum} from '../enum/incident-type.enum';
import {IncidentSeverityEnum} from '../enum/incident-severity.enum';
import {Employee} from './Employee';

export class Incident {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: IncidentTypeEnum;
  severity: IncidentSeverityEnum;
  employee: Employee;
}

export class IncidentDTO {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: IncidentTypeEnum;
  severity: IncidentSeverityEnum;
  employeeId: string;
}
