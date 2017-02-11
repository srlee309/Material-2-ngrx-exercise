import { Action } from '@ngrx/store';
import { type } from '../util';
import { NameResponse} from '../models/name-response.interface';
export const ActionTypes = {
  LOAD: type('[Names] Load'),
  LOAD_COMPLETE: type('[Names] Load Complete')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}
export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: NameResponse[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction | LoadCompleteAction;
