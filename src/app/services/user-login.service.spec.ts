import { TestBed, async, inject } from '@angular/core/testing';
import { UserLoginService } from './user-login.service';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { UserResponse} from '../models/user-response.interface';

describe('UserLoginService', () => {
  let mockBackend: MockBackend;
  let service: UserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpModule
      ],
      providers: [
        MockBackend,
        UserLoginService,
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
      UserLoginService
    ],
    (_mockBackend, _namesService) => {
      mockBackend = _mockBackend;
      service = _namesService;
    }
  ));
   it('should return expected response', async(() => {
    mockBackend.connections.subscribe(
        (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body:  { "id": "1"}
            }
          )));
      });

    service.login()
      .subscribe(
        (userDetails: UserResponse) => {
          expect(userDetails.id).toBe("1");
        }
      );
  }));
});
