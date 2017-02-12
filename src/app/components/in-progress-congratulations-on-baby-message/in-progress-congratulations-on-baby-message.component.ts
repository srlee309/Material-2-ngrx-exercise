import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {PendingMessage} from '../../models/pending-message.class';
import {ProcessCongratulationsOnBabyMessageRequest} from '../../models/process-congratulations-on-baby-request.class';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'mp-in-progress-congratulations-on-baby-message',
  templateUrl: './in-progress-congratulations-on-baby-message.component.html',
  styleUrls: ['./in-progress-congratulations-on-baby-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InProgressCongratulationsOnBabyMessageComponent {
  @Input() names: string[];
  @Input() message: PendingMessage;
  @Output() sendMessage = new EventEmitter<ProcessCongratulationsOnBabyMessageRequest>();
  selectedBabyBirthDate: Date;
  selectedBabyName: string;

  constructor(private store: Store<fromRoot.State>) {}

  sendMessageClick() {
    this.sendMessage.emit(new ProcessCongratulationsOnBabyMessageRequest(this.message, this.selectedBabyName, this.selectedBabyBirthDate));
  }
}
