import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { UserLoginService } from '../services/user-login.service';
import {UserResponse} from '../models/user-response.interface';
import * as userLogin from '../actions/user-login';
import * as names from '../actions/names';
import * as gifts from '../actions/gifts';
import * as pendingMessages from '../actions/pending-messages';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

@Injectable()
export class UserLoginEffects {
  @Effect() login$: Observable<Action> = this.actions$
      .ofType(userLogin.ActionTypes.LOGIN)
      .switchMap(() => {
        return this.userLoginService.login()
          .mergeMap((loggedInUser: UserResponse) => from([
              new gifts.LoadAction(),
              new names.LoadAction(),
              new pendingMessages.LoadForUserAction()
          ]));
          // in a real app a catch block would be here for error handling
         // .catch(error => of(new error.UserLoginErrorAction(error)));
      });
  constructor(
    private userLoginService: UserLoginService,
    private actions$: Actions
  ) { }
}
