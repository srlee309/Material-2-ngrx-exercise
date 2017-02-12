import { Action } from '@ngrx/store';
import { type } from '../util';
import { GiftResponse} from '../models/gift-response.interface';

export const ActionTypes = {
  LOAD: type('[Gifts] Load'),
  LOAD_COMPLETE: type('[Gifts] Load Complete'),
  LOAD_SPECIALS: type('[Gifts] Load Specials'),
  LOAD_SPECIALS_COMPLETE: type('[Gifts] Load Specials Complete'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}
export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: GiftResponse[]) { }
}
export class LoadSpecialsAction implements Action {
  type = ActionTypes.LOAD_SPECIALS;

  constructor() { }
}
export class LoadSpecialsCompleteAction implements Action {
  type = ActionTypes.LOAD_SPECIALS_COMPLETE;

  constructor(public payload: GiftResponse[]) { }
}
export type Actions
  = LoadAction | LoadCompleteAction
  | LoadSpecialsAction | LoadSpecialsCompleteAction;
