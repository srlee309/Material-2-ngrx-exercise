/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InProgressBirthdayWishMessageComponent } from './in-progress-birthday-wish-message.component';

describe('InProgressBirthdayWishMessageComponent', () => {
  let component: InProgressBirthdayWishMessageComponent;
  let fixture: ComponentFixture<InProgressBirthdayWishMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressBirthdayWishMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressBirthdayWishMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
