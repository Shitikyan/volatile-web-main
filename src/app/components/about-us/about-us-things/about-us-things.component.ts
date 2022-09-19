import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-things',
  templateUrl: './about-us-things.component.html',
  styleUrls: ['./about-us-things.component.scss'],
})
export class AboutUsThingsComponent implements OnInit {
  @Input() number: number;
  @Input() title: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
