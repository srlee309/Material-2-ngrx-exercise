import { Action } from '@ngrx/store';
import { type } from '../util';
import { GiftResponse} from '../models/gift-response.interface';

export const ActionTypes = {
  LOAD: type('[Gifts] Load'),
  LOAD_COMPLETE: type('[Gifts] Load Complete')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}
export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: GiftResponse[]) { }
}

export type Actions
  = LoadAction | LoadCompleteAction;
