import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {ProcessedMessagesService} from '../services/processed-messages.service';
import * as ProcessedMessages from '../actions/processed-messages';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { ProcessedMessagesResponse} from '../models/processed-messages-response.interface';

// in a real app we would also have an effect for deleting a Processed message from the server when it has been processed
@Injectable()
export class ProcessedMessagesEffects {
  @Effect() load$: Observable<Action> = this.actions$
      .ofType(ProcessedMessages.ActionTypes.LOAD)
      .switchMap(() => {
        return this.processedMessagesService.getMessages()
          .map((messageList: ProcessedMessagesResponse) => new ProcessedMessages.LoadCompleteAction(messageList));
          // in a real app a catch block would be here for error handling
           // .catch(error => of(new error.ProcessedMessagesErrorAction(error)));
      });

  constructor(
    private processedMessagesService: ProcessedMessagesService,
    private actions$: Actions
  ) { }
}
