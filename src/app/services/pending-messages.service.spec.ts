import { TestBed, async, inject } from '@angular/core/testing';
import { PendingMessagesService } from './pending-messages.service';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { PendingMessagesResponse} from '../models/pending-messages-response.interface';

describe('PendingMessagesService', () => {
  let mockBackend: MockBackend;
  let service: PendingMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpModule
      ],
      providers: [
        MockBackend,
        PendingMessagesService,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });
  beforeEach(inject([
      MockBackend,
      PendingMessagesService
    ],
    (_mockBackend, _namesService) => {
      mockBackend = _mockBackend;
      service = _namesService;
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body:  {
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
                    }
            }
          )));
      });
    }
  ));
   it('should return expected response for getUsersMessages', () => {
    service.getUsersMessages()
      .subscribe(
        (messages: PendingMessagesResponse) => {
          expect(messages.birthdayWish.length).toBe(1);
          expect(messages.congratulationsOnBaby.length).toBe(1);
        }
      );
  });
  it('should return expected response for getUpcomingMessages', () => {
    service.getUsersMessages()
      .subscribe(
        (messages: PendingMessagesResponse) => {
          expect(messages.birthdayWish.length).toBe(1);
          expect(messages.congratulationsOnBaby.length).toBe(1);
        }
      );
  });
});
