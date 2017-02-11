import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NameResponse} from '../models/name-response.interface';
import 'rxjs/add/operator/map';
@Injectable()
export class NamesService {

  constructor( private http: Http) { }
  getNames(): Observable<NameResponse[]> {
    return this.http.get('assets/api/names.json')
        .map((res: Response) => res.json());
  }
}
