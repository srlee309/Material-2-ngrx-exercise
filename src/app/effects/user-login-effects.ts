import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { UserLoginService } from '../services/user-login.service';
import {UserResponse} from '../models/user-response.interface';
import * as UserLoginActions from '../actions/user-login';
import * as NamesActions from '../actions/names';
import * as GiftsActions from '../actions/gifts';
import * as PendingMessagesActions from '../actions/pending-messages';
import * as ProcessedMessagesActions from '../actions/processed-messages';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

@Injectable()
export class UserLoginEffects {
  @Effect() login$: Observable<Action> = this.actions$
      .ofType(UserLoginActions.ActionTypes.LOGIN)
      .switchMap(() => {
        return this.userLoginService.login()
          .mergeMap((loggedInUser: UserResponse) => from([
              new GiftsActions.LoadAction(),
              new NamesActions.LoadAction(),
              new PendingMessagesActions.LoadForUserAction(),
              new PendingMessagesActions.LoadUpcomingAction(),
              new ProcessedMessagesActions.LoadAction()
          ]));
          // in a real app a catch block would be here for error handling
         // .catch(error => of(new error.UserLoginErrorAction(error)));
      });
  constructor(
    private userLoginService: UserLoginService,
    private actions$: Actions
  ) { }
}
