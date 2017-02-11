import { Component, Input } from '@angular/core';

import { GiftResponse} from '../../models/gift-response.interface';
@Component({
  selector: 'mp-in-progress-birthday-wish-message',
  templateUrl: './in-progress-birthday-wish-message.component.html',
  styleUrls: ['./in-progress-birthday-wish-message.component.scss']
})
export class InProgressBirthdayWishMessageComponent {
  @Input() gifts: GiftResponse[];
  selectedGift: GiftResponse;

}
