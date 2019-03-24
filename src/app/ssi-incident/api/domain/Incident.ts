import {IncidentTypeEnum} from '../enum/incident-type.enum';
import {IncidentSeverityEnum} from '../enum/incident-severity.enum';

export class Incident {
  id: string;
  name: string;
  description: string;
  date: Date;
  type: IncidentTypeEnum;
  severity: IncidentSeverityEnum;
  observation: string;
}
