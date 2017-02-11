import { reducer } from './pending-messages';
import * as fromPendingMessages from './pending-messages';
import { LoadForUserCompleteAction } from '../actions/pending-messages';
import { PendingMessagesResponse} from '../models/pending-messages-response.interface';
import { PendingMessage} from '../models/pending-message.class';
import * as PendingMessagesActions from '../actions/pending-messages';

const pendingMessagesPayload: PendingMessagesResponse = {
    'birthdayWish': [
        {
            'id': '1',
            'recipientName': 'Dan'
        },
        {
            'id': '2',
            'recipientName': 'Bob'
        }
    ],
    'congratulationsOnBaby': [
        {
            'id': '3',
            'recipientName': 'Nellie'
        }
    ]
};
const expectedResult = {
    'birthdayWish': [
        new PendingMessage(pendingMessagesPayload.birthdayWish[0].id,
                           pendingMessagesPayload.birthdayWish[0].recipientName, false),
        new PendingMessage(pendingMessagesPayload.birthdayWish[1].id,
                           pendingMessagesPayload.birthdayWish[1].recipientName, false),
    ],
    'congratulationsOnBaby': [
        new PendingMessage(pendingMessagesPayload.congratulationsOnBaby[0].id,
                           pendingMessagesPayload.congratulationsOnBaby[0].recipientName, false),
    ]
};
describe('PendingMessagesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toEqual(fromPendingMessages.initialState);
    });
  });

  describe('LOAD_FOR_USER_COMPLETE', () => {
     it('should load payload congratulations on baby messages into state congratulationsOnBaby array', () => {
        const loadForUserCompleteAction = new LoadForUserCompleteAction(pendingMessagesPayload);
        const result = reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
        expect(result.usersPending.birthdayWish).toEqual(expectedResult.birthdayWish);
    });
     it('should load payload birthday wish messages into state birthdayWish array', () => {
        const loadForUserCompleteAction = new LoadForUserCompleteAction(pendingMessagesPayload);
        const result = reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
        expect(result.usersPending.congratulationsOnBaby).toEqual(expectedResult.congratulationsOnBaby);
    });
  });

    describe('SELECT_USERS_PENDING_BIRTHDAY_WISH_MESSAGE', () => {
     it('should select message in action payload in state', () => {
        const loadForUserCompleteAction = new LoadForUserCompleteAction(pendingMessagesPayload);
        let result = reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
        result = reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(expectedResult.birthdayWish[0]));
        expect(result.usersPending.birthdayWish[0].isSelected).toBeTruthy();
     });
     it('should unselect previous selected message in state when new message selected', () => {
        const loadForUserCompleteAction = new LoadForUserCompleteAction(pendingMessagesPayload);
        let result = reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
        result = reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(expectedResult.birthdayWish[0]));
        result = reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(expectedResult.birthdayWish[1]));
        expect(result.usersPending.birthdayWish[0].isSelected).toBeFalsy();
     });
  });
});
