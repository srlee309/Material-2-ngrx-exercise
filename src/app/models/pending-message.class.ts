import { PendingMessageResponse } from './pending-message-response.interface';

export class PendingMessage implements PendingMessageResponse {
  constructor(public id: string, public recipientName: string, public isSelected: boolean) {
  }
}
