import { Component, Input } from '@angular/core';
import {DateModel} from 'ng2-datepicker';
import {PendingMessage} from '../../models/pending-message.class';
@Component({
  selector: 'mp-in-progress-congratulations-on-baby-message',
  templateUrl: './in-progress-congratulations-on-baby-message.component.html',
  styleUrls: ['./in-progress-congratulations-on-baby-message.component.scss']
})
export class InProgressCongratulationsOnBabyMessageComponent {
  @Input() names: string[];
  @Input() message: PendingMessage;
   babyBirthDate: DateModel;
  selectedBabyName: string;

}
