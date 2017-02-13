import {PendingMessage} from './pending-message.class';
import { GiftResponse} from './gift-response.interface';
export class ProcessBirthdayWishMessageRequest {
    constructor(public message: PendingMessage, public gift: GiftResponse) {}
}
