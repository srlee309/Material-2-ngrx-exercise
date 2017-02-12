
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { GiftsEffects } from './gifts-effects';
import { HttpModule } from '@angular/http';
import {GiftsService} from '../services/gifts.service';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import * as GiftsActions from '../actions/gifts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GiftResponse} from '../models/gift-response.interface';

const giftsPayload: GiftResponse[] = [{
                      'title': 'Owl sculpture',
                      // tslint:disable-next-line:max-line-length
                      'description': 'Delicately carved from luminous white onyx, this elegant owl has a sodalite beak and wide glass eyes glaring out into the night. It stands 7 inches tall and is designed by a Peruvian gem artist to reflect the owl\'s radiance',
                      'location': 'assets/images/owl-sculpture.jpg'
                  }];
class MockGiftsService {
  getGifts() {
    return of(giftsPayload);
  }
}

describe('GiftsEffects', () => {
  let runner: EffectsRunner;
  let giftsEffects: GiftsEffects;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,

    ],
    providers: [
      GiftsEffects,
      {provide: GiftsService, useClass: MockGiftsService}
    ],
  }));

  beforeEach(inject([
      EffectsRunner, GiftsEffects
    ],
    (_runner, _GiftsEffects) => {
      runner = _runner;
      giftsEffects = _GiftsEffects;
    }
  ));

  it('should return a LOAD_COMPLETE action with expected gifts as payload', () => {
    runner.queue(new GiftsActions.LoadAction());

    giftsEffects.load$.subscribe(result => {
      expect(result).toEqual(new GiftsActions.LoadCompleteAction(giftsPayload));
    });
  });
});
