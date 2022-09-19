import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-badge',
  templateUrl: './achievement-badge.component.html',
  styleUrls: ['./achievement-badge.component.scss']
})
export class AchievementBadgeComponent implements OnInit {

  @Input() stat: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
