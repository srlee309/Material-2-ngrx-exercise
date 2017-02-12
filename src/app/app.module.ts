// tslint:disable:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GiftsEffects } from './effects/gifts-effects';
import {GiftsService} from './services/gifts.service';
import { NamesEffects } from './effects/names-effects';
import {NamesService} from './services/names.service';
import { PendingMessagesEffects } from './effects/pending-messages-effects';
import {PendingMessagesService} from './services/pending-messages.service';
import { UserLoginEffects } from './effects/user-login-effects';
import { UserLoginService } from './services/user-login.service';
import { AppComponent } from './containers/app/app.component';
import { reducer } from './reducers';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { DatePickerModule } from 'ng2-datepicker';
import { PendingMessageListComponent } from './containers/pending-message-list/pending-message-list.component';
import { PendingMessagesComponent } from './components/pending-messages/pending-messages.component';
import { InProgressBirthdayWishMessageComponent } from './components/in-progress-birthday-wish-message/in-progress-birthday-wish-message.component';
import { InProgressCongratulationsOnBabyMessageComponent } from './components/in-progress-congratulations-on-baby-message/in-progress-congratulations-on-baby-message.component';
import { UpcomingMessageListComponent } from './containers/upcoming-message-list/upcoming-message-list.component';
@NgModule({
  imports: [
    BrowserModule,
    DatePickerModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(GiftsEffects),
    EffectsModule.run(NamesEffects),
    EffectsModule.run(PendingMessagesEffects),
    EffectsModule.run(UserLoginEffects)
  ],
  declarations: [
    AppComponent,
    PendingMessageListComponent,
    PendingMessagesComponent,
    InProgressBirthdayWishMessageComponent,
    InProgressCongratulationsOnBabyMessageComponent,
    UpcomingMessageListComponent
  ],
  providers: [GiftsService, NamesService, PendingMessagesService, UserLoginService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
