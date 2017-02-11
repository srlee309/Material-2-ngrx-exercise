import { TestBed, async, inject } from '@angular/core/testing';
import { GiftsService } from './gifts.service';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { GiftResponse} from '../models/gift-response.interface';

describe('giftsService', () => {
  let mockBackend: MockBackend;
  let service: GiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpModule
      ],
      providers: [
        MockBackend,
        GiftsService,
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
      GiftsService
    ],
    (_mockBackend, _giftsService) => {
      mockBackend = _mockBackend;
      service = _giftsService;
    }
  ));

  it('should return expected response', () => {
    mockBackend.connections.subscribe(
        (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: [{
                      'title': 'Owl sculpture',
                      'description': 'Delicately carved from luminous white onyx, this elegant owl has a sodalite beak and wide glass eyes glaring out into the night. It stands 7 inches tall and is designed by a Peruvian gem artist to reflect the owl\'s radiance',
                      'location': 'assets/images/owl-sculpture.jpg'
                  }]
            }
          )));
      });

    service.getGifts()
      .subscribe(
        (gifts: GiftResponse[]) => {
          expect(gifts.length).toBe(1);
        }
      );
  });
});
