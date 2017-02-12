export class ProcessedBirthdayWishMessage {
    readonly recipientName: string;
    readonly content: string;
    constructor(recipientName: string, giftName: string) {
        this.recipientName = recipientName;
        this.content = 'Mate, Happy Birthday. To celebrate this once a year occasion we have pciked the following gift ${giftName}. Enjoy';
    }
}