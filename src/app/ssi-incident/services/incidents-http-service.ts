/**
 * @author alain quinones
 */
import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../boostrap/base-http-service';
import {Incident} from '../api/domain/Incident';

@Injectable()
export class IncidentsHttpService extends BaseHttpService<Incident> {

  protected path(): string {
    return '/incidents';
  }
}
