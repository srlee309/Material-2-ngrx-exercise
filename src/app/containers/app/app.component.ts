import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import * as UserLoginActions from '../../actions/user-login';
@Component({
  selector: 'mp-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names$: Observable<string[]>;

  constructor(private store: Store<fromRoot.State>) { 
    this.names$ = this.store.select(fromRoot.getNames);
    this.store.dispatch(new UserLoginActions.LoginAction());
  }
}
