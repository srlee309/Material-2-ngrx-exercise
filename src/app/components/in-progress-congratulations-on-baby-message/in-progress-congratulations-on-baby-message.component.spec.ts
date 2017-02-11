/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InProgressCongratulationsOnBabyMessageComponent } from './in-progress-congratulations-on-baby-message.component';

describe('InProgressCongratulationsOnBabyMessageComponent', () => {
  let component: InProgressCongratulationsOnBabyMessageComponent;
  let fixture: ComponentFixture<InProgressCongratulationsOnBabyMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressCongratulationsOnBabyMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressCongratulationsOnBabyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
