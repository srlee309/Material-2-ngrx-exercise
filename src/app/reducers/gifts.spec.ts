import { reducer } from './gifts';
import * as fromGifts from './gifts';
import { LoadCompleteAction } from '../actions/gifts';
import { GiftResponse } from '../models/gift-response.interface';
import * as GiftsActions from '../actions/gifts';

const giftsPayload: GiftResponse[] = [{
  'title': 'Owl sculpture',
  // tslint:disable-next-line:max-line-length
  'description': 'Delicately carved from luminous white onyx, this elegant owl has a sodalite beak and wide glass eyes glaring out into the night. It stands 7 inches tall and is designed by a Peruvian gem artist to reflect the owl\'s radiance',
  'location': 'assets/images/owl-sculpture.jpg'
}];

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
      const loadGiftsCompleteAction = new LoadCompleteAction(giftsPayload);
      const result = reducer(fromGifts.initialState, loadGiftsCompleteAction);
      expect(result.gifts).toEqual(giftsPayload);
    });
  });
});
