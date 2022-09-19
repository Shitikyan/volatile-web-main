import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TechnologyStack } from '@configs/types';
import { TechnologyStackConfig } from '@configs/technology-stack.config';

@Component({
  selector: 'page-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  @ViewChild('backend', { read: ElementRef }) backend: ElementRef;
  @ViewChild('frontend', { read: ElementRef }) frontend: ElementRef;
  @ViewChild('devops', { read: ElementRef }) devops: ElementRef;
  @ViewChild('uiux', { read: ElementRef }) uiux: ElementRef;
  
  technologyStacks: TechnologyStack = {};

  constructor() { }

  ngOnInit(): void {
    this.technologyStacks = TechnologyStackConfig;
  }

}
