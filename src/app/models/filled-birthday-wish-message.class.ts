import { GiftResponse} from './gift-response.interface';
export class FilledBirthdayWishMessage {
    constructor(public recipientName: string, public gift: GiftResponse) {}
}
