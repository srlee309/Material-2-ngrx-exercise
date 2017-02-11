import * as NamesActions from '../actions/names';

export interface State {
  names: string[];
};

export const initialState: State = {
  names: []
};

export function reducer(state = initialState, action: NamesActions.Actions): State {
  switch (action.type) {
    case NamesActions.ActionTypes.LOAD_COMPLETE:
      const namesArray = action.payload.map((nameResponse) => nameResponse.name);
      return {
        names: [...namesArray]
      };
    default: {
      return state;
    }
  }
}

export const getNames = (state: State) => state.names;
