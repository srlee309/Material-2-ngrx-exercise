import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PendingMessagesResponse } from '../models/pending-messages-response.interface';
import 'rxjs/add/operator/map';
@Injectable()
export class PendingMessagesService {
  constructor(private http: Http) { }
  getUsersMessages(): Observable<PendingMessagesResponse> {
    return this.http.get('assets/api/usersPendingMessages.json')
      .map((res: Response) => res.json());
  }

  getUpcomingMessages(): Observable<PendingMessagesResponse> {
    return this.http.get('assets/api/upcomingMessages.json')
      .map((res: Response) => res.json());
  }
}
