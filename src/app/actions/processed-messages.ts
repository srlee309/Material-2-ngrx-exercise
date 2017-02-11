import { Action } from '@ngrx/store';
import { type } from '../util';
import { MessageResponse} from '../models/pending-message-response.interface';
export const ActionTypes = {
  LOAD: type('[Processed Messages] Load'),
  LOAD_COMPLETE: type('[Processed Messages] Load Complete')
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}
export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: MessageResponse[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadAction | LoadCompleteAction;
