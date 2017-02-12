import * as PendingMessagesActions from '../actions/pending-messages';
import { PendingMessage } from '../models/pending-message.class';
import { PendingMessageResponse } from '../models/pending-message-response.interface';
import { createSelector } from 'reselect';


export interface State {
  usersPending: {
    birthdayWish: PendingMessage[];
    congratulationsOnBaby: PendingMessage[];
  };
  upcoming: {
    birthdayWish: PendingMessage[];
    congratulationsOnBaby: PendingMessage[];
  };
};

export const initialState: State = {
  usersPending: {
    birthdayWish: [],
    congratulationsOnBaby: []
  },
  upcoming: {
    birthdayWish: [],
    congratulationsOnBaby: []
  }
};
function getAsUnselectedPendingMessageObjects(messagesPayload: PendingMessageResponse[]) {
  return messagesPayload.map((message: PendingMessageResponse) => new PendingMessage(message.id, message.recipientName, false));
}

export function reducer(state = initialState, action: PendingMessagesActions.Actions): State {
  switch (action.type) {
    case PendingMessagesActions.ActionTypes.LOAD_FOR_USER_COMPLETE:
     return Object.assign({}, state, {
        usersPending: {
          birthdayWish: getAsUnselectedPendingMessageObjects(action.payload.birthdayWish),
          congratulationsOnBaby: getAsUnselectedPendingMessageObjects(action.payload.congratulationsOnBaby)
        }
      });
  case PendingMessagesActions.ActionTypes.LOAD_UPCOMING_COMPLETE:
     return Object.assign({}, state, {
        upcoming: {
          birthdayWish: getAsUnselectedPendingMessageObjects(action.payload.birthdayWish),
          congratulationsOnBaby: getAsUnselectedPendingMessageObjects(action.payload.congratulationsOnBaby)
        }
      });
    case PendingMessagesActions.ActionTypes.SELECT_USERS_PENDING_BIRTHDAY_WISH_MESSAGE:
      return Object.assign({}, state, {
        usersPending: {
          birthdayWish: state.usersPending.birthdayWish.map((message: PendingMessage) => {
            return Object.assign({}, message, {'isSelected': message.id === action.payload.id});
          }),
          congratulationsOnBaby: state.usersPending.congratulationsOnBaby
        }
      });
    case PendingMessagesActions.ActionTypes.DELETE_USERS_PENDING_MESSAGE:
      return Object.assign({}, state, {
        usersPending: {
          birthdayWish: state.usersPending.birthdayWish.filter((message) => message.id !== action.payload.id),
          congratulationsOnBaby: state.usersPending.congratulationsOnBaby
        }
      });
    default: {
      return state;
    }
  }
}

export const getUsersBirthdayWishMessages = (state: State) => state.usersPending.birthdayWish;
export const getUsersCongratulationsOnBabyMessages = (state: State) => state.usersPending.congratulationsOnBaby;

export const getUpcomingBirthdayWishMessages = (state: State) => state.upcoming.birthdayWish;
export const getUpcomingCongratulationsOnBabyMessages = (state: State) => state.upcoming.congratulationsOnBaby;

export const getUsersSelectedBirthdayWishMessage =
  createSelector(getUsersBirthdayWishMessages,
    (messages: PendingMessage[]) => messages.find((message: PendingMessage) => message.isSelected));
