import { PendingMessageResponse } from './pending-message-response.interface';

export interface PendingMessagesResponse {
  birthdayWish: PendingMessageResponse[];
  congratulationsOnBaby: PendingMessageResponse[];
}
