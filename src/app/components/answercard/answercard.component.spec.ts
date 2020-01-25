import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswercardComponent } from './answercard.component';

describe('AnswercardComponent', () => {
  let component: AnswercardComponent;
  let fixture: ComponentFixture<AnswercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
