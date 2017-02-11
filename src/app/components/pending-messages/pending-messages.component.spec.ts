/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick, } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdChipsModule } from '@angular/material';
import { PendingMessagesComponent } from './pending-messages.component';
import { PendingMessage} from '../../models/pending-message.class';
import 'hammerjs';
const expectedMessage = new PendingMessage('1', 'Dan', false);

describe('PendingMessagesComponent', () => {
  let component: PendingMessagesComponent;
  let fixture: ComponentFixture<PendingMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MdChipsModule.forRoot() ],
      declarations: [ PendingMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingMessagesComponent);
    component = fixture.componentInstance;
  });

  it('should emit message when messageClick is run and selectable is true',  fakeAsync(() => {
    component.messageSelected.subscribe(message => {
        expect(message).toEqual(expectedMessage);
    });
    component.selectable = true;
    component.messageClick(expectedMessage);
    tick();
    fixture.detectChanges();
  }));
});
