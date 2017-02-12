import { reducer } from './gifts';
import * as fromGifts from './gifts';
import { LoadCompleteAction, LoadSpecialsCompleteAction } from '../actions/gifts';
import { GiftResponse } from '../models/gift-response.interface';
import * as GiftsActions from '../actions/gifts';

const giftsPayload: GiftResponse[] = [{
  'title': 'Owl sculpture',
  'description': 'test',
  'location': 'assets/images/owl-sculpture.jpg'
}];
const specialsPayload: GiftResponse[] = [{
  'title': 'test',
  'description': 'test',
  'location': 'assets/images/owl-sculpture.jpg'
}];
const loadGiftsCompleteAction = new LoadCompleteAction(giftsPayload);
const loadSpecialsCompleteAction = new LoadSpecialsCompleteAction(specialsPayload);
describe('GiftsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toEqual(fromGifts.initialState);
    });
  });

  describe('LOAD_COMPLETE', () => {
    it('should load payload gifts into state gifts array', () => {
      const result = reducer(fromGifts.initialState, loadGiftsCompleteAction);
      expect(result.gifts).toEqual(giftsPayload);
    });
  });
   describe('LOAD_SPECIALS_COMPLETE', () => {
    it('should load payload gifts into state gifts array', () => {
      let result = reducer(fromGifts.initialState, loadGiftsCompleteAction);
      result = reducer(result, loadGiftsCompleteAction);
      expect(result.gifts.length).toEqual(2);
    });
  });
});
