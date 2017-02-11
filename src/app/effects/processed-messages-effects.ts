import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {ProcessedMessagesService} from '../services/processed-messages.service';
import * as ProcessedMessages from '../actions/Processed-messages';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { MessageResponse} from '../models/message-response';

// in a real app we would also have an effect for deleting a Processed message from the server when it has been processed
@Injectable()
export class ProcessedMessagesEffects {
  constructor(
    private ProcessedMessagesService: ProcessedMessagesService,
    private actions$: Actions
  ) { }

  @Effect() load$: Observable<Action> = this.actions$
      .ofType(ProcessedMessages.ActionTypes.LOAD)
      .switchMap(() => {
        return this.ProcessedMessagesService.getMessages()
          .map((messageList: MessageResponse[]) => new ProcessedMessages.LoadCompleteAction(messageList))
          .catch(error => of(new ProcessedMessages.LoadCompleteAction([])));
      });
}