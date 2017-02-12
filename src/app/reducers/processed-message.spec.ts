import * as ProcessedMessages from './processed-messages';
import { LoadCompleteAction } from '../actions/processed-messages';
import { ProcessedMessagesResponse } from '../models/processed-messages-response.interface';
import { ProcessedMessage } from '../models/processed-message.class';
import * as ProcessedMessagesActions from '../actions/processed-messages';
import {FilledBirthdayWishMessage} from '../models/filled-birthday-wish-message.class';
import * as fromRoot from './index';
const processedMessagesPayload: ProcessedMessagesResponse = {
    'birthdayWish': [
        {
            'recipientName': 'test',
            'content': 'Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: Owl sculpture. Enjoy'
        }
    ],
    'congratulationsOnBaby': [
    ]
};
const loadCompleteAction = new LoadCompleteAction(processedMessagesPayload);
const gift = {
    'title': 'Owl sculpture',
    'description': 'test',
    'location': 'assets/images/owl-sculpture.jpg'
};
const  birthdayWishMessage = new FilledBirthdayWishMessage('test', gift);
const expectedMessagesResult = {
    'birthdayWish': [
        ProcessedMessage.fromBirthdayWishMessage(birthdayWishMessage)
    ],
    'congratulationsOnBaby': [
    ]
};
const expectedState: ProcessedMessages.State = expectedMessagesResult;

describe('ProcessedMessagesReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;
            const result = ProcessedMessages.reducer(undefined, action);
            expect(result).toEqual(ProcessedMessages.initialState);
        });
    });

    describe('LOAD_FOR_USER_COMPLETE', () => {
        /*it('should load payload congratulations on baby messages into state congratulationsOnBaby array', () => {
            const result = ProcessedMessages.reducer(ProcessedMessages.initialState, loadCompleteAction);
            expect(result.birthdayWish).toEqual(expectedMessagesResult.birthdayWish);
        });*/
        it('should load payload birthday wish messages into state birthdayWish array', () => {
            const result = ProcessedMessages.reducer(ProcessedMessages.initialState, loadCompleteAction);
            expect(result.congratulationsOnBaby).toEqual(expectedMessagesResult.congratulationsOnBaby);
        });
    });
});
