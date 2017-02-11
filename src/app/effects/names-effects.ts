import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {NamesService} from '../services/names.service';
import * as NamesActions from '../actions/names';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { NameResponse} from '../models/name-response.interface';

@Injectable()
export class NamesEffects {
  @Effect() load$: Observable<Action> = this.actions$
      .ofType(NamesActions.ActionTypes.LOAD)
      .switchMap(() => {
        return this.namesService.getNames()
          .map((namesList: NameResponse[]) => new NamesActions.LoadCompleteAction(namesList))
          .catch(error => of(new NamesActions.LoadCompleteAction([])));
      });

  constructor(
    private namesService: NamesService,
    private actions$: Actions
  ) { }
}
