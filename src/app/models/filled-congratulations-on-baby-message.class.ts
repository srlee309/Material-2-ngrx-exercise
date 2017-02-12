
export class FilledCongratulationsOnBabyMessage {
    recipientName: string;
    babyName: string;
    babyBirthDate: string;

    constructor(recipientName: string, babyName: string, babyBirthDate: string) {
        this.recipientName = recipientName;
        this.babyName = babyName;
        this.babyBirthDate = babyBirthDate;
    }
}
