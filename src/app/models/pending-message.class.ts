import { PendingMessageResponse } from './pending-message-response.interface';

export class PendingMessage implements PendingMessageResponse {
  readonly id: string;
  readonly recipientName: string;
  isSelected: boolean;
  constructor(id: string, recipientName: string, isSelected: boolean) {
      this.id = id;
      this.recipientName = recipientName;
      this.isSelected = isSelected;
  }
}
