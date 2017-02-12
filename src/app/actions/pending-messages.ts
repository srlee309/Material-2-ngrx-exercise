import { Action } from '@ngrx/store';
import { type } from '../util';
import { PendingMessagesResponse } from '../models/pending-messages-response.interface';
import { PendingMessage } from '../models/pending-message.class';

export const ActionTypes = {
  LOAD_FOR_USER: type('[Pending Messages] Load For User'),
  LOAD_FOR_USER_COMPLETE: type('[Pending Messages] Load For User Complete'),
  LOAD_UPCOMING: type('[Pending Messages]  Load Upcoming'),
  LOAD_UPCOMING_COMPLETE: type('[Pending Messages] Load Upcoming Complete'),
  SELECT_USERS_PENDING_BIRTHDAY_WISH_MESSAGE: type('[Pending Messages] Select Users Pending Birthday Wish Message'),
  SELECT_USERS_PENDING_CONGRATULATIONS_ON_BABY_MESSAGE: type('[Pending Messages] Select Users Pending Congratulations On Baby Message'),
  DELETE_USERS_PENDING_MESSAGE: type('[Pending Messages] Delete Users Pending Message')
};

export class LoadForUserAction implements Action {
  type = ActionTypes.LOAD_FOR_USER;

  constructor() { }
}
export class LoadForUserCompleteAction implements Action {
  type = ActionTypes.LOAD_FOR_USER_COMPLETE;

  constructor(public payload: PendingMessagesResponse) { }
}

export class LoadUpcomingAction implements Action {
  type = ActionTypes.LOAD_UPCOMING;

  constructor() { }
}
export class LoadUpcomingCompleteAction implements Action {
  type = ActionTypes.LOAD_UPCOMING_COMPLETE;

  constructor(public payload: PendingMessagesResponse) { }
}

export class SelectUsersPendingBirthdayWishMessageAction implements Action {
  type = ActionTypes.SELECT_USERS_PENDING_BIRTHDAY_WISH_MESSAGE;

  constructor(public payload: PendingMessage) { }
}

export class SelectUsersPendingCongratulationsOnBabyMessageAction implements Action {
  type = ActionTypes.SELECT_USERS_PENDING_CONGRATULATIONS_ON_BABY_MESSAGE;

  constructor(public payload: PendingMessage) { }
}

export class DeleteUsersPendingMessageAction implements Action {
  type = ActionTypes.DELETE_USERS_PENDING_MESSAGE;

  constructor(public payload: PendingMessage) { }
}

export type Actions
  = LoadForUserAction | LoadForUserCompleteAction | LoadUpcomingAction
  | LoadUpcomingCompleteAction | SelectUsersPendingBirthdayWishMessageAction
  | SelectUsersPendingCongratulationsOnBabyMessageAction | DeleteUsersPendingMessageAction;
