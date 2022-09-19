import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-intro',
  templateUrl: './service-intro.component.html',
  styleUrls: ['./service-intro.component.scss']
})
export class ServiceIntroComponent implements OnInit {
  @Input() title: string;
  @Input() scrollEl: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    this.scrollEl.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

}
