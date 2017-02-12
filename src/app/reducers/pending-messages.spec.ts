import * as PendingMessages  from './pending-messages';
import * as fromPendingMessages from './pending-messages';
import { LoadForUserCompleteAction } from '../actions/pending-messages';
import { PendingMessagesResponse } from '../models/pending-messages-response.interface';
import { PendingMessage } from '../models/pending-message.class';
import * as PendingMessagesActions from '../actions/pending-messages';
import * as fromRoot from './index';
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
const loadForUserCompleteAction = new LoadForUserCompleteAction(pendingMessagesPayload);
const expectedMessagesResult = {
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
}
const expectedState: PendingMessages.State = {
    usersPending: expectedMessagesResult,
    upcoming: expectedMessagesResult
};

describe('PendingMessagesReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;
            const result = PendingMessages.reducer(undefined, action);
            expect(result).toEqual(fromPendingMessages.initialState);
        });
    });

    describe('LOAD_FOR_USER_COMPLETE', () => {
        it('should load payload congratulations on baby messages into state congratulationsOnBaby array', () => {
            const result = PendingMessages.reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
            expect(result.usersPending.birthdayWish).toEqual(expectedMessagesResult.birthdayWish);
        });
        it('should load payload birthday wish messages into state birthdayWish array', () => {
            const result = PendingMessages.reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
            expect(result.usersPending.congratulationsOnBaby).toEqual(expectedMessagesResult.congratulationsOnBaby);
        });
    });

    describe('SELECT_USERS_PENDING_BIRTHDAY_WISH_MESSAGE', () => {
        it('should select message in action payload in state', () => {
            let result = PendingMessages.reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
            result = PendingMessages.reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(
                expectedMessagesResult.birthdayWish[0]));
            expect(result.usersPending.birthdayWish[0].isSelected).toBeTruthy();
        });
        it('should unselect previous selected message in state when new message selected', () => {
            let result = PendingMessages.reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
            result = PendingMessages.reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(
                expectedMessagesResult.birthdayWish[0]));
            result = PendingMessages.reducer(result, new PendingMessagesActions.SelectUsersPendingBirthdayWishMessageAction(
                expectedMessagesResult.birthdayWish[1]));
            expect(result.usersPending.birthdayWish[0].isSelected).toBeFalsy();
        });
    });

    describe('DELETE_USERS_PENDING_MESSAGE', () => {
        it('should delete message with same id as message id in payload', () => {
            let result = PendingMessages.reducer(fromPendingMessages.initialState, loadForUserCompleteAction);
            result = PendingMessages.reducer(result, new PendingMessagesActions.DeleteUsersPendingMessageAction(
                expectedMessagesResult.birthdayWish[0]));
            expect(result.usersPending.birthdayWish.length).toBe(1);
            expect(result.usersPending.birthdayWish[0].id).toBe('2');
        });
    });

    describe('getUsersSelectedBirthdayWishMessage selector', () => {
        it('should select message that has isSelected as true', () => {
            expectedState.usersPending.birthdayWish[0].isSelected = true;
            const result = PendingMessages.getUsersSelectedBirthdayWishMessage(expectedState);
            expect(result).toEqual(expectedState.usersPending.birthdayWish[0]);
        });
    });
});
