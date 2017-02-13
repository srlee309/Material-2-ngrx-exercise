import {PendingMessage} from './pending-message.class';

export class ProcessCongratulationsOnBabyMessageRequest {
    constructor(public message: PendingMessage, public selectedBabyName: string, public selectedBabyBirthDate: Date ) {}
}
