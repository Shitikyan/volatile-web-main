import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-question-answer',
  templateUrl: './about-us-question-answer.component.html',
  styleUrls: ['./about-us-question-answer.component.scss'],
})
export class AboutUsQuestionAnswerComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;

  constructor() {}

  ngOnInit(): void {}
}
