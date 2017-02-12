import { Component, Input, EventEmitter, Output} from '@angular/core';
import {FilledBirthdayWishMessage} from '../../models/filled-birthday-wish-message.class';
import { GiftResponse} from '../../models/gift-response.interface';
import {ProcessedMessage} from '../../models/processed-message.class';
import {PendingMessage} from '../../models/pending-message.class';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import * as ProcessedMessageActions from '../../actions/processed-messages';

@Component({
  selector: 'mp-in-progress-birthday-wish-message',
  templateUrl: './in-progress-birthday-wish-message.component.html',
  styleUrls: ['./in-progress-birthday-wish-message.component.scss']
})
export class InProgressBirthdayWishMessageComponent {
  @Input() gifts: GiftResponse[];
  @Input() message: PendingMessage;
  selectedGift: GiftResponse;

  constructor(private store: Store<fromRoot.State>) {}

  sendMessage(recipientName: string, selectedGift: GiftResponse) {
    // in a real app we would dispatch an effect action to update the data on the server
    this.store.dispatch(new PendingMessageActions.DeleteUsersPendingMessageAction(this.message));
    this.store.dispatch(new ProcessedMessageActions.AddBirthdayWishMessageAction(
      new FilledBirthdayWishMessage(recipientName, selectedGift)));
  }
}
