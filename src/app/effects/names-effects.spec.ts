
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NamesEffects } from './names-effects';
import { HttpModule } from '@angular/http';
import {NamesService} from '../services/names.service';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import * as NamesActions from '../actions/names';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NameResponse} from '../models/name-response.interface';

const namesPayload: NameResponse[] = [{name: 'Dan'}, {name: 'Paige'}, {name: 'Rhona'}];
class MockNamesService {
  getNames() {
    return of(namesPayload);
  }
}

describe('NamesEffects', () => {
  let runner: EffectsRunner;
  let namesEffects: NamesEffects;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,

    ],
    providers: [
      NamesEffects,
      {provide: NamesService, useClass: MockNamesService}
    ],
  }));

  beforeEach(inject([
      EffectsRunner, NamesEffects
    ],
    (_runner, _NamesEffects) => {
      runner = _runner;
      namesEffects = _NamesEffects;
    }
  ));

  it('should return a LOAD_COMPLETE action with expected names as payload', () => {
    runner.queue(new NamesActions.LoadAction());

    namesEffects.load$.subscribe(result => {
      expect(result).toEqual(new NamesActions.LoadCompleteAction(namesPayload));
    });
  });
});
