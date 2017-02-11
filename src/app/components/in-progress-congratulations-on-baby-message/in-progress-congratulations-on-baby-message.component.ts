import { Component } from '@angular/core';
import {DateModel} from 'ng2-datepicker';
@Component({
  selector: 'mp-in-progress-congratulations-on-baby-message',
  templateUrl: './in-progress-congratulations-on-baby-message.component.html',
  styleUrls: ['./in-progress-congratulations-on-baby-message.component.scss']
})
export class InProgressCongratulationsOnBabyMessageComponent {

   babyBirthDate: DateModel;
  selectedBabyName: string;

}
