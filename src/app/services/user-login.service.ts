import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {UserResponse} from '../models/user-response.interface';

@Injectable()
export class UserLoginService {
  constructor( private http: Http) { }
  login(): Observable<UserResponse> {
    return this.http.get('assets/api/user.json')
        .map((res: Response) => res.json());
  }
}
