import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {GiftsService} from '../services/gifts.service';
import * as GiftsActions from '../actions/gifts';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { GiftResponse} from '../models/gift-response.interface';

@Injectable()
export class GiftsEffects {
  @Effect() load$: Observable<Action> = this.actions$
      .ofType(GiftsActions.ActionTypes.LOAD)
      .switchMap(() => {
        return this.giftsService.getGifts()
          .map((giftList: GiftResponse[]) => new GiftsActions.LoadCompleteAction(giftList))
          .catch(error => of(new GiftsActions.LoadCompleteAction([])));
      });

    @Effect() loadSpecials$: Observable<Action> = this.actions$
      .ofType(GiftsActions.ActionTypes.LOAD_SPECIALS)
      .switchMap(() => {
        return this.giftsService.getSpecials()
          .map((giftList: GiftResponse[]) => new GiftsActions.LoadSpecialsCompleteAction(giftList))
          .catch(error => of(new GiftsActions.LoadSpecialsCompleteAction([])));
      });

  constructor(
    private giftsService: GiftsService,
    private actions$: Actions
  ) { }
}
