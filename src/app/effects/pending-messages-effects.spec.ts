
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PendingMessagesEffects } from './pending-messages-effects';
import { HttpModule } from '@angular/http';
import {PendingMessagesService} from '../services/pending-messages.service';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import * as PendingMessagesActions from '../actions/pending-messages';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PendingMessagesResponse} from '../models/pending-messages-response.interface';

const pendingMessagesPayload: PendingMessagesResponse = {
    'birthdayWish': [
        {
            'id': '1',
            'recipientName': 'Dan'
        }
    ],
    'congratulationsOnBaby': [
        {
            'id': '3',
            'recipientName': 'Nellie'
        }
    ]
};
class MockPendingMessagesService {
  getUsersMessages() {
    return of(pendingMessagesPayload);
  }
  getUpcomingMessages() {
    return of(pendingMessagesPayload);
  }
}

describe('PendingMessagesEffects', () => {
  let runner: EffectsRunner;
  let pendingMessagesEffects: PendingMessagesEffects;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,

    ],
    providers: [
      PendingMessagesEffects,
      {provide: PendingMessagesService, useClass: MockPendingMessagesService}
    ],
  }));

  beforeEach(inject([
      EffectsRunner, PendingMessagesEffects
    ],
    (_runner, _PendingMessagesEffects) => {
      runner = _runner;
      pendingMessagesEffects = _PendingMessagesEffects;
    }
  ));

  it('should return a USERS_LOAD_COMPLETE action with expected pendingMessages as payload', () => {
    runner.queue(new PendingMessagesActions.LoadForUserAction());

    pendingMessagesEffects.loadUsers$.subscribe(result => {
      expect(result).toEqual(new PendingMessagesActions.LoadForUserCompleteAction(pendingMessagesPayload));
    });
  });
   it('should return a UPCOMING_LOAD_COMPLETE action with expected pendingMessages as payload', () => {
    runner.queue(new PendingMessagesActions.LoadUpcomingAction());

    pendingMessagesEffects.loadUpcoming$.subscribe(result => {
      expect(result).toEqual(new PendingMessagesActions.LoadUpcomingCompleteAction(pendingMessagesPayload));
    });
  });
});
