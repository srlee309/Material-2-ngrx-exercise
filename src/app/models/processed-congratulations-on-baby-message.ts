import { PendingMessageResponse } from './pending-message';

export class ProcessedCongratulationsOnBabyMessage implements PendingMessageResponse {
    readonly recipientName: string;
    readonly content: string;
    constructor(recipientName: string, babyName: string, babyBirthDate: string) {
        this.recipientName = recipientName;
        this.content = 'Whooa well done and congratulations on the birth of ${babyName} on ${babyBirthDate}';
    }
}