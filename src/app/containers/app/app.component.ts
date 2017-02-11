import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as UserLoginActions from '../../actions/user-login';
@Component({
  selector: 'mp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) { 
    this.store.dispatch(new UserLoginActions.LoginAction());
  }
}
