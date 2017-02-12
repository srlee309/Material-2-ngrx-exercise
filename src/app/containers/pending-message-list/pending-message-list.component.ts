import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import { Observable } from 'rxjs/Observable';
import { PendingMessage} from '../../models/pending-message.class';
import { GiftResponse} from '../../models/gift-response.interface';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'mp-pending-message-list',
  templateUrl: './pending-message-list.component.html',
  styleUrls: ['./pending-message-list.component.scss']
})
export class PendingMessageListComponent {
  gifts$: Observable<GiftResponse[]>;
  names$: Observable<string[]>;
  selectedBirthdayWishMessage: PendingMessage;
  usersPendingBirthdayWishMessages$: Observable<PendingMessage[]>;
  usersPendingCongratulationsOnBabyMessages$: Observable<PendingMessage[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.gifts$ = this.store.select(fromRoot.getGifts);
    this.names$ = this.store.select(fromRoot.getNames);
    this.usersPendingBirthdayWishMessages$ = this.store.select(fromRoot.getUsersPendingBirthdayWishMessages);
    this.usersPendingCongratulationsOnBabyMessages$ = this.store.select(fromRoot.getUsersPendingCongratulationsOnBabyMessages);
    this.store.select(fromRoot.getUsersSelectedBirthdayWishMessage)
              .subscribe((message: PendingMessage) => this.selectedBirthdayWishMessage = message);
  }

  onBirthdayWishMessageSelected(message: PendingMessage) {
    this.store.dispatch(new PendingMessageActions.SelectUsersPendingBirthdayWishMessageAction(message));
  }
}
