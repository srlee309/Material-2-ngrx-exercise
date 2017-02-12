import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcessedMessagesResponse} from '../models/processed-messages-response.interface';
import 'rxjs/add/operator/map';
@Injectable()
export class ProcessedMessagesService {
  constructor( private http: Http) { }
    getMessages(): Observable<ProcessedMessagesResponse> {
      return this.http.get('assets/api/processedMessages.json')
          .map((res: Response) => res.json());
    }
}
