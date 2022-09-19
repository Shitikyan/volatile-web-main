import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})
export class TechnologyItemComponent implements OnInit {

  @Input('name') name: string;
  @Input('icon') icon: string;

  constructor() { }

  ngOnInit(): void {
  }

  get iconImg() {
    return `/assets/icons/technologies/${this.icon}`;
  }

}
