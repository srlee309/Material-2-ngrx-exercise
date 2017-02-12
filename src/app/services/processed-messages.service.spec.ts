import { TestBed, async, inject } from '@angular/core/testing';
import { ProcessedMessagesService } from './processed-messages.service';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { ProcessedMessagesResponse } from '../models/processed-messages-response.interface';

describe('ProcessedMessagesService', () => {
  let mockBackend: MockBackend;
  let service: ProcessedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MockBackend,
        ProcessedMessagesService,
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
    ProcessedMessagesService
  ],
    (_mockBackend, _namesService) => {
      mockBackend = _mockBackend;
      service = _namesService;
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: {
                'birthdayWish': [
                  {
                    recipientName: 'test',
                    // tslint:disable-next-line:max-line-length
                    content: 'Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: Owl sculpture. Enjoy'
                  }
                ],
                'congratulationsOnBaby': [
                ]
              }
            }
            )));
        });
    }
  ));
  it('should return expected response for getMessages', () => {
    service.getMessages()
      .subscribe(
      (messages: ProcessedMessagesResponse) => {
        expect(messages.birthdayWish.length).toBe(1);
        expect(messages.congratulationsOnBaby.length).toBe(0);
      }
      );
  });
});
