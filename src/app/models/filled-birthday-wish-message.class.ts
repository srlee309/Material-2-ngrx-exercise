import { GiftResponse} from './gift-response.interface';
export class FilledBirthdayWishMessage {
    recipientName: string;
    gift: GiftResponse;

    constructor(recipientName: string, gift: GiftResponse) {
        this.recipientName = recipientName;
        this.gift = gift;
    }
}
