import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PendingMessage} from '../../models/pending-message.class';
@Component({
  selector: 'mp-pending-messages',
  templateUrl: './pending-messages.component.html',
  styleUrls: ['./pending-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingMessagesComponent  {
  @Input() messages: PendingMessage[];
  @Input() selectable: boolean;
  @Output() messageSelected = new EventEmitter<PendingMessage>();

  messageClick(message: PendingMessage) {
    if (this.selectable) {
      this.messageSelected.emit(message);
    }
  }
}
