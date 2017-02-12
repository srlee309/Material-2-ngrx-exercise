import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GiftResponse} from '../models/gift-response.interface';
import 'rxjs/add/operator/map';
@Injectable()
export class GiftsService {
  constructor( private http: Http) { }
  getGifts(): Observable<GiftResponse[]> {
    return this.http.get('assets/api/gifts.json')
        .map((res: Response) => res.json());
  }

  getSpecials(): Observable<GiftResponse[]> {
    return this.http.get('assets/api/specials.json')
        .map((res: Response) => res.json());
  }

}
