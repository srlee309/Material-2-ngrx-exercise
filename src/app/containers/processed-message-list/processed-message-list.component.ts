import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { ProcessedMessage} from '../../models/processed-message.class';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'mp-processed-message-list',
  templateUrl: './processed-message-list.component.html',
  styleUrls: ['./processed-message-list.component.scss']
})
export class ProcessedMessageListComponent {
  birthdayWishMessages$: Observable<ProcessedMessage[]>;
  congratulationsOnBabyMessages$: Observable<ProcessedMessage[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.birthdayWishMessages$ = this.store.select(fromRoot.getProcessedBirthdayWishMessages);
    this.congratulationsOnBabyMessages$ = this.store.select(fromRoot.getProcessedCongratulationsOnBabyMessages);
  }
}
