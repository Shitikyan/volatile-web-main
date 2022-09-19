import { Component, Input, OnInit } from '@angular/core';
import { Themes } from '@configs/themes/types';

@Component({
  selector: 'app-theme-logo',
  templateUrl: './theme-logo.component.html',
  styleUrls: ['./theme-logo.component.scss'],
})
export class ThemeLogoComponent implements OnInit {
  @Input() value: Themes;

  constructor() {}

  ngOnInit(): void {}
}
