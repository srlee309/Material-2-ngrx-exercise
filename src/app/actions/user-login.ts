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

export type Actions
  = LoginAction;
