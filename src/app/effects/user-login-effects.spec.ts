
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserLoginEffects } from './user-login-effects';
import { HttpModule } from '@angular/http';
import {UserLoginService} from '../services/user-login.service';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import * as UserLogin from '../actions/user-login';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserResponse} from '../models/user-response.interface';
import * as Names from '../actions/names';
import * as PendingMessages from '../actions/pending-messages';
import 'rxjs/add/operator/switch';
const userLoginPayload: UserResponse = { 'id': '1'};
class MockUserLoginService {
  login() {
    return of(userLoginPayload);
  }
}

describe('UserLoginEffects', () => {
  let runner: EffectsRunner;
  let userLoginEffects: UserLoginEffects;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,
    ],
    providers: [
      UserLoginEffects,
      {provide: UserLoginService, useClass: MockUserLoginService}
    ],
  }));

  beforeEach(inject([
      EffectsRunner, UserLoginEffects
    ],
    (_runner, _UserLoginEffects) => {
      runner = _runner;
      userLoginEffects = _UserLoginEffects;
    }
  ));

 /* it('should return a LOAD_COMPLETE action with expected userLogin as payload', async(() => {
    runner.queue(new UserLogin.LoginAction());

    userLoginEffects.login$.subscribe(result => {
      expect(result).toEqual([new Names.LoadAction(), new PendingMessages.LoadAction()]);
    });
  }));*/
});