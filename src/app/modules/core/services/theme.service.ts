import { isEmpty } from 'lodash';
import { EventEmitter } from 'events';
import { environment } from '@env';
import { Injectable } from '@angular/core';
import { Themes } from '@app/configs/themes/types';
import darkTheme from '@app/configs/themes/dark.theme';
import lightTheme from '@app/configs/themes/light.theme';
import { LocalStorageService } from './local-storage.service';

const themes = new Map<Themes, any>([
  ['dark', lightTheme],
  ['light', darkTheme],
]);

const THEME_KEY: string = 'currentTheme';
const DEFAULT_THEME: Themes = environment.defaultTheme;

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private initialized: boolean = false;
  private selectedTheme: Themes;
  private onChange: EventEmitter;

  constructor(private localStorageService: LocalStorageService) {
    this.onChange = new EventEmitter();
   }

  public setTheme(key?: Themes) {
    if (isEmpty(key) || !themes.has(key)) {
      return this.setTheme(DEFAULT_THEME);
    }

    const theme = themes.get(key);

    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );

    this.localStorageService.set({
      key: THEME_KEY,
      value: key
    });

    this.selectedTheme = key;
    this.onChange.emit('themeChange', this.selectedTheme);
  }

  public init() {
    if (this.initialized) {
      return;
    }

    let selectedTheme = this.localStorageService.get(THEME_KEY) as Themes;
    this.setTheme(selectedTheme);
    this.initialized = true;
  }

  public subscribe(callback: (theme: Themes) => any) {
    this.onChange.addListener('themeChange', callback);
  }

  public get currentTheme(): Themes {
    return this.selectedTheme;
  }
}
