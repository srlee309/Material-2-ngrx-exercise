import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import { Observable } from 'rxjs/Observable';
import { PendingMessage} from '../../models/pending-message.class';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'mp-pending-message-list',
  templateUrl: './pending-message-list.component.html',
  styleUrls: ['./pending-message-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingMessageListComponent {
  usersPendingBirthdayWishMessages$: Observable<PendingMessage[]>;
  usersPendingCongratulationsOnBabyMessages$: Observable<PendingMessage[]>;
  selectedBirthdayWishMessage: PendingMessage;

  constructor(private store: Store<fromRoot.State>) {
    this.usersPendingBirthdayWishMessages$ = this.store.select(fromRoot.getUsersPendingBirthdayWishMessages);
    this.usersPendingCongratulationsOnBabyMessages$ = this.store.select(fromRoot.getUsersPendingCongratulationsOnBabyMessages);
    this.usersPendingBirthdayWishMessages$
      .mergeMap((messages: PendingMessage[]) => messages)
      .find((message: PendingMessage) => message.isSelected)
      .subscribe((message: PendingMessage) => this.selectedBirthdayWishMessage = message);
  }

  onBirthdayWishMessageSelected(message: PendingMessage) {
    this.store.dispatch(new PendingMessageActions.SelectUsersPendingBirthdayWishMessageAction(message));
  }
}
