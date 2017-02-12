import { ProcessedMessageResponse } from './processed-message-response.interface';
import {FilledBirthdayWishMessage} from './filled-birthday-wish-message.class';
import {FilledCongratulationsOnBabyMessage} from './filled-congratulations-on-baby-message.class';
export class ProcessedMessage implements ProcessedMessageResponse {
  readonly recipientName: string;
  readonly content: string;

  static fromBirthdayWishMessage(filledBirthdayWishMessage: FilledBirthdayWishMessage) {
    const giftTitle = filledBirthdayWishMessage.gift.title;
    const messageContent = `Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: ${giftTitle}. Enjoy`;
    return new this(filledBirthdayWishMessage.recipientName, messageContent);
  }
  static fromCongratulationsOnBabyMessage(filledCongratulationsOnBabyMessage: FilledCongratulationsOnBabyMessage) {
    const messageContent = `Whooa well done and congratulations on the birth of
                            ${filledCongratulationsOnBabyMessage.babyName} on ${filledCongratulationsOnBabyMessage.babyBirthDate}.`;
    return new this(filledCongratulationsOnBabyMessage.recipientName, messageContent);
  }

  constructor(recipientName: string, content: string) {
      this.recipientName = recipientName;
      this.content = content;
  }
}
