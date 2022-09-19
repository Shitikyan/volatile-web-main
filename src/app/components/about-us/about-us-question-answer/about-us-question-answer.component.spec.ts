import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsQuestionAnswerComponent } from './about-us-question-answer.component';

describe('AboutUsQuestionAnswerComponent', () => {
  let component: AboutUsQuestionAnswerComponent;
  let fixture: ComponentFixture<AboutUsQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsQuestionAnswerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
