import { Component, Input, OnInit } from '@angular/core';
import { Themes } from '@configs/themes/types';
import { ThemeService } from '@modules/core/services/theme.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() path: string;
  @Input() name: string;

  public fullPath: string = '';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.subscribe(this.setFullPath.bind(this));
    this.setFullPath(this.themeService.currentTheme);
  }

  private setFullPath(theme: Themes) {
    this.fullPath = `${this.path}/${theme}-${this.name}`;
  }
}
