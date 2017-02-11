import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromNames from './names';
import * as fromPendingMessages from './pending-messages';
import { createSelector } from 'reselect';
export interface State {
    names: fromNames.State;
    pendingMessages: fromPendingMessages.State;
}

const reducers = {
    names: fromNames.reducer,
    pendingMessages: fromPendingMessages.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
      return productionReducer(state, action);
    } else {
      return developmentReducer(state, action);
    }
}

export const getNamesState = (state: State) => state.names;
export const getNames = createSelector(getNamesState, fromNames.getNames);

export const getPendingMessagesState = (state: State) => state.pendingMessages;
export const getUsersPendingBirthdayWishMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUsersPendingBirthdayWishMessages);
export const getUsersPendingCongratulationsOnBabyMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUsersPendingCongratulationsOnBabyMessages);
export const getUpcomingBirthdayWishMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUpcomingBirthdayWishMessages);
export const getUpcomingCongratulationsOnBabyMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUpcomingCongratulationsOnBabyMessages);