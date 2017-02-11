import { Action } from '@ngrx/store';
import { type } from '../util';
import { NameResponse} from '../models/name-response.interface';
export const ActionTypes = {
  LOGIN: type('[User Login] Login')
};

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor() { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoginAction;
