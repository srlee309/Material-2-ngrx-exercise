import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MessageResponse} from '../models/message-response';
import 'rxjs/add/operator/map';
@Injectable()
export class ProcessedMessagesService {
  constructor( private http: Http) { }
    getMessages(): Observable<MessageResponse[]> {
      return this.http.get('assets/api/processedMessages.json')
          .map((res: Response) => res.json());
    }
}
