import * as ProcessedMessagesActions from '../actions/processed-messages';
import { ProcessedMessage } from '../models/processed-message.class';
import { ProcessedMessagesResponse } from '../models/processed-messages-response.interface';
import { createSelector } from 'reselect';


export interface State {
    birthdayWish: ProcessedMessage[];
    congratulationsOnBaby: ProcessedMessage[];
};

export const initialState: State = {
    birthdayWish: [],
    congratulationsOnBaby: []
};

function getAsProcessedMessageObjects(messagesPayload: ProcessedMessage[]) {
  return messagesPayload.map((message: ProcessedMessage) => new ProcessedMessage(message.recipientName, message.content));
}
export function reducer(state = initialState, action: ProcessedMessagesActions.Actions): State {
    switch (action.type) {
        case ProcessedMessagesActions.ActionTypes.LOAD_COMPLETE:
             return {
                birthdayWish: getAsProcessedMessageObjects(action.payload.birthdayWish),
                congratulationsOnBaby: action.payload.congratulationsOnBaby
            };
        case ProcessedMessagesActions.ActionTypes.ADD_BIRTHDAY_WISH_MESSAGE:
            return Object.assign({}, state, {
                birthdayWish: [...state.birthdayWish, ProcessedMessage.fromBirthdayWishMessage(action.payload)],
                congratulationsOnBaby: state.congratulationsOnBaby
            });
        case ProcessedMessagesActions.ActionTypes.ADD_CONGRATULATIONS_ON_BABY_MESSAGE:
        return Object.assign({}, state, {
                birthdayWish: state.birthdayWish,
                congratulationsOnBaby: [...state.congratulationsOnBaby, ProcessedMessage.fromCongratulationsOnBabyMessage(action.payload)]
            });
        default: {
            return state;
        }
    }
}

export const getBirthdayWishMessages = (state: State) => state.birthdayWish;
export const getCongratulationsOnBabyMessages = (state: State) => state.congratulationsOnBaby;
