import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { PendingMessage} from '../../models/pending-message.class';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'mp-upcoming-message-list',
  templateUrl: './upcoming-message-list.component.html',
  styleUrls: ['./upcoming-message-list.component.scss']
})
export class UpcomingMessageListComponent {
  upcomingBirthdayWishMessages$: Observable<PendingMessage[]>;
  upcomingCongratulationsOnBabyMessages$: Observable<PendingMessage[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.upcomingBirthdayWishMessages$ = this.store.select(fromRoot.getUpcomingBirthdayWishMessages);
    this.upcomingCongratulationsOnBabyMessages$ = this.store.select(fromRoot.getUpcomingCongratulationsOnBabyMessages);
  }
}
