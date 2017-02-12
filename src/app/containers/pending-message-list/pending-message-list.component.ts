import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import { Observable } from 'rxjs/Observable';
import { PendingMessage } from '../../models/pending-message.class';
import { GiftResponse } from '../../models/gift-response.interface';
import {ProcessBirthdayWishMessageRequest} from '../../models/process-birthday-wish-message-request.class';
import {ProcessCongratulationsOnBabyMessageRequest} from '../../models/process-congratulations-on-baby-request.class';
import {FilledCongratulationsOnBabyMessage} from '../../models/filled-congratulations-on-baby-message.class';
import * as ProcessedMessageActions from '../../actions/processed-messages';
import {FilledBirthdayWishMessage} from '../../models/filled-birthday-wish-message.class';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'mp-pending-message-list',
  templateUrl: './pending-message-list.component.html',
  styleUrls: ['./pending-message-list.component.scss']
})
export class PendingMessageListComponent implements OnDestroy {
  gifts$: Observable<GiftResponse[]>;
  names$: Observable<string[]>;
  selectedBirthdayWishMessage: PendingMessage;
  selectedCongratulationsOnBabyMessage: PendingMessage;
  usersPendingBirthdayWishMessages$: Observable<PendingMessage[]>;
  usersPendingCongratulationsOnBabyMessages$: Observable<PendingMessage[]>;
  private getUsersSelectedBirthdayWishMessageSubscription;
  private getUsersSelectedCongratulationsOnBabyMessageSubscription;

  constructor(private store: Store<fromRoot.State>) {
    this.gifts$ = this.store.select(fromRoot.getGifts);
    this.names$ = this.store.select(fromRoot.getNames);
    this.usersPendingBirthdayWishMessages$ = this.store.select(fromRoot.getUsersPendingBirthdayWishMessages);
    this.usersPendingCongratulationsOnBabyMessages$ = this.store.select(fromRoot.getUsersPendingCongratulationsOnBabyMessages);
    this.getUsersSelectedBirthdayWishMessageSubscription = this.store.select(fromRoot.getUsersSelectedBirthdayWishMessage)
      .subscribe((message: PendingMessage) => this.selectedBirthdayWishMessage = message);
    this.getUsersSelectedCongratulationsOnBabyMessageSubscription = this.store.select(fromRoot.getUsersSelectedCongratulationsOnBabyMessage)
      .subscribe((message: PendingMessage) => this.selectedCongratulationsOnBabyMessage = message);
  }

  onBirthdayWishMessageSelected(message: PendingMessage) {
    this.store.dispatch(new PendingMessageActions.SelectUsersPendingBirthdayWishMessageAction(message));
  }

  onBirthdayWishMessageSend(request: ProcessBirthdayWishMessageRequest) {
    // in a real app we would dispatch an effect action to update the data on the server
    this.store.dispatch(new PendingMessageActions.DeleteUsersPendingMessageAction(request.message));
    this.store.dispatch(new ProcessedMessageActions.AddBirthdayWishMessageAction(
      new FilledBirthdayWishMessage(request.message.recipientName, request.gift)));
  }

  onCongratulationsOnBabyMessageSelected(message: PendingMessage) {
    this.store.dispatch(new PendingMessageActions.SelectUsersPendingCongratulationsOnBabyMessageAction(message));
  }

  onCongratulationsOnBabyMessageSend(request: ProcessCongratulationsOnBabyMessageRequest) {
     // in a real app we would dispatch an effect action to update the data on the server
    this.store.dispatch(new PendingMessageActions.DeleteUsersPendingMessageAction(request.message));
    // tslint:disable-next-line:max-line-length
    const australianDate = `${request.selectedBabyBirthDate.getDay()}/${request.selectedBabyBirthDate.getMonth()}/${request.selectedBabyBirthDate.getFullYear()}`;
    this.store.dispatch(new ProcessedMessageActions.AddCongratulationsOnBabyMessageAction(
      new FilledCongratulationsOnBabyMessage(request.message.recipientName, request.selectedBabyName, australianDate)));
  }

  ngOnDestroy() {
      this.getUsersSelectedBirthdayWishMessageSubscription.unsubscribe();
      this.getUsersSelectedCongratulationsOnBabyMessageSubscription.unsubscribe();
  }
}
