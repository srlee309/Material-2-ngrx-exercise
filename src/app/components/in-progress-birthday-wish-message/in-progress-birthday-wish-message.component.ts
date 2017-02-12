import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FilledBirthdayWishMessage} from '../../models/filled-birthday-wish-message.class';
import { GiftResponse} from '../../models/gift-response.interface';
import {ProcessedMessage} from '../../models/processed-message.class';
import {PendingMessage} from '../../models/pending-message.class';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import * as ProcessedMessageActions from '../../actions/processed-messages';
import {ProcessBirthdayWishMessageRequest} from '../../models/process-birthday-wish-message-request.class';
@Component({
  selector: 'mp-in-progress-birthday-wish-message',
  templateUrl: './in-progress-birthday-wish-message.component.html',
  styleUrls: ['./in-progress-birthday-wish-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InProgressBirthdayWishMessageComponent {
  @Input() gifts: GiftResponse[];
  @Input() message: PendingMessage;
  @Output() sendMessage = new EventEmitter<ProcessBirthdayWishMessageRequest>();
  selectedGift: GiftResponse;

  constructor(private store: Store<fromRoot.State>) {}

  sendMessageClick() {
    this.sendMessage.emit(new ProcessBirthdayWishMessageRequest(this.message, this.selectedGift));
  }
}
