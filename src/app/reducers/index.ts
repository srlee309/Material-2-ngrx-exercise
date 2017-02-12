import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromNames from './names';
import * as fromPendingMessages from './pending-messages';
import * as fromGifts from './gifts';
import * as fromProcessedMessages from './processed-messages';
import { createSelector } from 'reselect';
export interface State {
    gifts: fromGifts.State;
    names: fromNames.State;
    pendingMessages: fromPendingMessages.State;
    processedMessages: fromProcessedMessages.State;
}

const reducers = {
    gifts: fromGifts.reducer,
    names: fromNames.reducer,
    pendingMessages: fromPendingMessages.reducer,
    processedMessages: fromProcessedMessages.reducer
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

export const getGiftsState = (state: State) => state.gifts;
export const getGifts = createSelector(getGiftsState, fromGifts.getGifts);

export const getNamesState = (state: State) => state.names;
export const getNames = createSelector(getNamesState, fromNames.getNames);

export const getPendingMessagesState = (state: State) => state.pendingMessages;
export const getUsersPendingBirthdayWishMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUsersBirthdayWishMessages);
export const getUsersPendingCongratulationsOnBabyMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUsersCongratulationsOnBabyMessages);
export const getUpcomingBirthdayWishMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUpcomingBirthdayWishMessages);
export const getUpcomingCongratulationsOnBabyMessages =
    createSelector(getPendingMessagesState, fromPendingMessages.getUpcomingCongratulationsOnBabyMessages);
export const getUsersSelectedBirthdayWishMessage =
    createSelector(getPendingMessagesState, fromPendingMessages.getUsersSelectedBirthdayWishMessage);

export const getProcessedMessagesState = (state: State) => state.processedMessages;
export const getProcessedBirthdayWishMessages =
    createSelector(getProcessedMessagesState, fromProcessedMessages.getBirthdayWishMessages);
export const getProcessedCongratulationsOnBabyMessages =
    createSelector(getProcessedMessagesState, fromProcessedMessages.getCongratulationsOnBabyMessages);