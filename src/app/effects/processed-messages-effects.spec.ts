
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ProcessedMessagesEffects } from './processed-messages-effects';
import { HttpModule } from '@angular/http';
import {ProcessedMessagesService} from '../services/processed-messages.service';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import * as ProcessedMessagesActions from '../actions/processed-messages';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProcessedMessagesResponse} from '../models/processed-messages-response.interface';

const processedMessagesPayload: ProcessedMessagesResponse = {
    'birthdayWish': [
        {
            recipientName: 'test',
            content: 'Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: Owl sculpture. Enjoy'
        }
    ],
    'congratulationsOnBaby': [
    ]
};
class MockProcessedMessagesService {
  getMessages() {
    return of(processedMessagesPayload);
  }
}

describe('ProcessedMessagesEffects', () => {
  let runner: EffectsRunner;
  let processedMessagesEffects: ProcessedMessagesEffects;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,

    ],
    providers: [
      ProcessedMessagesEffects,
      {provide: ProcessedMessagesService, useClass: MockProcessedMessagesService}
    ],
  }));

  beforeEach(inject([
      EffectsRunner, ProcessedMessagesEffects
    ],
    (_runner, _ProcessedMessagesEffects) => {
      runner = _runner;
      processedMessagesEffects = _ProcessedMessagesEffects;
    }
  ));

 it('should return a LOAD_COMPLETE action with expected processedMessages as payload', () => {
    runner.queue(new ProcessedMessagesActions.LoadAction());

    processedMessagesEffects.load$.subscribe(result => {
      expect(result).toEqual(new ProcessedMessagesActions.LoadCompleteAction(processedMessagesPayload));
    });
  });
});
