import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {PendingMessagesService} from '../services/pending-messages.service';
import * as PendingMessagesActions from '../actions/pending-messages';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { PendingMessagesResponse} from '../models/pending-messages-response.interface';

// in a real app we would also have an effect for deleting a users pending message from the server when it has been processed
@Injectable()
export class PendingMessagesEffects {
  @Effect() loadUsers$: Observable<Action> = this.actions$
      .ofType(PendingMessagesActions.ActionTypes.LOAD_FOR_USER)
      .switchMap(() => {
        return this.pendingMessagesService.getUsersMessages()
          .map((messageList: PendingMessagesResponse) => new PendingMessagesActions.LoadForUserCompleteAction(messageList));
           // in a real app a catch block would be here for error handling
           // .catch(error => of(new error.PendingMessagesErrorAction(error)));
      });

    @Effect() loadUpcoming$: Observable<Action> = this.actions$
      .ofType(PendingMessagesActions.ActionTypes.LOAD_UPCOMING)
      .switchMap(() => {
        return this.pendingMessagesService.getUpcomingMessages()
          .map((messageList: PendingMessagesResponse) => new PendingMessagesActions.LoadUpcomingCompleteAction(messageList));
           // in a real app a catch block would be here for error handling
           // .catch(error => of(new error.PendingMessagesErrorAction(error)));
      });

  constructor(
    private pendingMessagesService: PendingMessagesService,
    private actions$: Actions
  ) { }
}
