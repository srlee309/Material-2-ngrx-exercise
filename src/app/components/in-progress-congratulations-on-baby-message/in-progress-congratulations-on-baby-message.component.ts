import { Component, Input } from '@angular/core';
import {PendingMessage} from '../../models/pending-message.class';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as PendingMessageActions from '../../actions/pending-messages';
import * as ProcessedMessageActions from '../../actions/processed-messages';
import {FilledCongratulationsOnBabyMessage} from '../../models/filled-congratulations-on-baby-message.class';
@Component({
  selector: 'mp-in-progress-congratulations-on-baby-message',
  templateUrl: './in-progress-congratulations-on-baby-message.component.html',
  styleUrls: ['./in-progress-congratulations-on-baby-message.component.scss']
})
export class InProgressCongratulationsOnBabyMessageComponent {
  @Input() names: string[];
  @Input() message: PendingMessage;
  selectedBabyBirthDate: Date;
  selectedBabyName: string;

  constructor(private store: Store<fromRoot.State>) {}

  sendMessage(recipientName: string, selectedBabyName: string, selectedBabyBirthDate: Date) {
    // in a real app we would dispatch an effect action to update the data on the server
    this.store.dispatch(new PendingMessageActions.DeleteUsersPendingMessageAction(this.message));
    const australianDate = `${this.selectedBabyBirthDate.getDay()}/${this.selectedBabyBirthDate.getMonth()}/${this.selectedBabyBirthDate.getFullYear()}`;
    this.store.dispatch(new ProcessedMessageActions.AddCongratulationsOnBabyMessageAction(
      new FilledCongratulationsOnBabyMessage(this.message.recipientName, this.selectedBabyName, australianDate)));
  }
}
