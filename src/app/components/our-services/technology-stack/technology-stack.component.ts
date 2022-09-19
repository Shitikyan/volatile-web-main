import { Component, Input, OnInit } from '@angular/core';
import { TechnologyItem } from '@configs/types';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.scss'],
})
export class TechnologyStackComponent implements OnInit {
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('items') items: TechnologyItem[];

  constructor() {}

  ngOnInit(): void {}

}
