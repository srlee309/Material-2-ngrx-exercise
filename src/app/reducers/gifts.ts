import * as GiftsActions from '../actions/gifts';
import { GiftResponse} from '../models/gift-response.interface';
export interface State {
  gifts: GiftResponse[];
};

export const initialState: State = {
  gifts: []
};

export function reducer(state = initialState, action: GiftsActions.Actions): State {
  switch (action.type) {
    case GiftsActions.ActionTypes.LOAD_SPECIALS_COMPLETE:
    case GiftsActions.ActionTypes.LOAD_COMPLETE:
      return {
        gifts: [...state.gifts, ...action.payload]
      };
    default: {
      return state;
    }
  }
}

export const getGifts = (state: State) => state.gifts;
