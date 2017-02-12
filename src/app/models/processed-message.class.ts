import { ProcessedMessageResponse } from './processed-message-response.interface';

export class ProcessedMessage implements ProcessedMessageResponse {
  readonly recipientName: string;
  readonly content: string;
  constructor(recipientName: string, content: string) {
      this.recipientName = recipientName;
      this.content = content;
  }
}
