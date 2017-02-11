import { reducer } from './names';
import * as fromNames from './names';
import { LoadCompleteAction } from '../actions/names';
import { NameResponse} from '../models/name-response.interface';
import * as NamesActions from '../actions/names';

const namesPayload: NameResponse[] = [{'name': 'Dan'},
                                      {'name': 'Paige'},
                                      {'name': 'Rhona'}];

const expectedResult = ['Dan', 'Paige', 'Rhona'];

describe('NamesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const result = reducer(undefined, action);
      expect(result).toEqual(fromNames.initialState);
    });
  });

  describe('LOAD_COMPLETE', () => {
     it('should load payload names into state names array', () => {
        const loadNamesCompleteAction = new LoadCompleteAction(namesPayload);
        const result = reducer(fromNames.initialState, loadNamesCompleteAction);
        expect(result.names).toEqual(expectedResult);
    });
  });
});
