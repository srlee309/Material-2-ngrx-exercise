import { ProcessedMessageResponse } from './processed-message-response.interface';
import {FilledBirthdayWishMessage} from './filled-birthday-wish-message.class';
export class ProcessedMessage implements ProcessedMessageResponse {
  readonly recipientName: string;
  readonly content: string;

  static fromBirthdayWishMessage(filledBirthdayWishMessage: FilledBirthdayWishMessage) {
    const giftTitle = filledBirthdayWishMessage.gift.title;
    const messageContent = `Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: ${giftTitle}. Enjoy`;
    return new this(filledBirthdayWishMessage.recipientName, messageContent);
  }
  static fromCongratulationsOnBabyMessage(recipientName: string, giftName: string) {

  }

  constructor(recipientName: string, content: string) {
      this.recipientName = recipientName;
      this.content = content;
  }
}
