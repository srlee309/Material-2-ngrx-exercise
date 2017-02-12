import { Action } from '@ngrx/store';
import { type } from '../util';
import { ProcessedMessagesResponse} from '../models/processed-messages-response.interface';
import {FilledBirthdayWishMessage} from '../models/filled-birthday-wish-message.class';
import {FilledCongratulationsOnBabyMessage} from '../models/filled-congratulations-on-baby-message.class';

export const ActionTypes = {
  LOAD: type('[Processed Messages] Load'),
  LOAD_COMPLETE: type('[Processed Messages] Load Complete'),
  ADD_BIRTHDAY_WISH_MESSAGE: type('[Processed Messages] Add Birthday Wish Message'),
  ADD_CONGRATULATIONS_ON_BABY_MESSAGE: type('[Processed Messages] Add Congratulations On Baby Message'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}
export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: ProcessedMessagesResponse) { }
}

export class AddBirthdayWishMessageAction implements Action {
  type = ActionTypes.ADD_BIRTHDAY_WISH_MESSAGE;

  constructor(public payload: FilledBirthdayWishMessage) { }
}

export class AddCongratulationsOnBabyMessageAction implements Action {
  type = ActionTypes.ADD_CONGRATULATIONS_ON_BABY_MESSAGE;

  constructor(public payload: FilledCongratulationsOnBabyMessage) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction | LoadCompleteAction
  | AddBirthdayWishMessageAction | AddCongratulationsOnBabyMessageAction;
