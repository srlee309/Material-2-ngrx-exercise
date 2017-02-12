import { TestBed, async, inject } from '@angular/core/testing';
import { NamesService } from './names.service';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { NameResponse } from '../models/name-response.interface';

describe('NamesService', () => {
  let mockBackend: MockBackend;
  let service: NamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MockBackend,
        NamesService,
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
    NamesService
  ],
    (_mockBackend, _namesService) => {
      mockBackend = _mockBackend;
      service = _namesService;
    }
  ));

  it('should return expected response', () => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [{ 'name': 'Dan' },
            { 'name': 'Paige' },
            { 'name': 'Rhona' }]
          }
          )));
      });

    service.getNames()
      .subscribe(
      (names: NameResponse[]) => {
        expect(names.length).toBe(3);
      }
      );
  });
});
