import { environment } from '@env';
import {
  Inject,
  OnInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { ThemeService } from '@modules/core/services/theme.service';
import { TranslationService } from '@modules/core/services/translation.service';
import { Themes } from '@configs/themes/types';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isHeaderSmall: boolean = false;
  @ViewChild('switchMenu') switcher: ElementRef;
  @HostListener('window:scroll', []) onWindowScroll($event) {
    if (this.document.documentElement.scrollTop > 50) {
      this.isHeaderSmall = true;
    } else {
      this.isHeaderSmall = false;
    }
  }

  currentTheme: Themes;
  currentLanguage: string;
  isSidebarOpened: boolean = false;
  appLanguages = environment.languagesDisplay;

  constructor(
    private themeService: ThemeService,
    private translation: TranslationService,
    @Inject(DOCUMENT) private document: Document
  ) {
    themeService.init();
    translation.init();

    this.currentTheme = themeService.currentTheme;
    this.currentLanguage = translation.checkLocalStorage();
  }

  ngOnInit(): void {}

  closeMenu = (): void => {
    this.switcher.nativeElement.click();
  };

  checkSizeWindow(event) {
    if (event.target.innerWidth > 1024) {
      this.isSidebarOpened = false;
    }
  }

  openSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
    this.isSidebarOpened
      ? this.document.body.classList.add('disabledOverflow')
      : this.document.body.classList.remove('disabledOverflow');
  }

  changeLang = (newLang: string): void => {
    this.translation.changeLangApp(newLang);
  };

  changeTheme = () => {
    if (this.currentTheme === 'light') {
      this.themeService.setTheme('dark');
      this.currentTheme = 'dark';
    } else {
      this.themeService.setTheme('light');
      this.currentTheme = 'light';
    }
  };
}
