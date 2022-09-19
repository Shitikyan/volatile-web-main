import { environment } from '@env';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILocalStorage } from 'environments/types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})

export class TranslationService {
  public browserLang: string;
  appLanguages: Array<string> = environment.languages;
  appDefaultLanguage: string = environment.defaultLanguage;
  keyText: string = 'currentLanguage';
  setLanguage: ILocalStorage;
  currentLanguage: string;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService
  ) {}

  init() {
    this.translate.addLangs(environment.languages);
    this.translate.setDefaultLang(environment.defaultLanguage);
    this.browserLang = this.translate.getBrowserLang();
  }

  public checkLocalStorage(): string {
    this.currentLanguage = this.appLanguages.includes(this.getBrowserLang())
      ? this.getBrowserLang()
      : this.appDefaultLanguage;

    const localStorageValue = this.localStorage.get(this.keyText); 
    if (!localStorageValue) {
      this.setLanguage = {
        key: this.keyText,
        value: this.currentLanguage,
      };

      this.localStorage.set(this.setLanguage);
    } else if (environment.languages.includes(localStorageValue)) {
      this.currentLanguage = localStorageValue;
    } else {
      this.changeLangApp(environment.defaultLanguage);
    }

    this.useTranslate(this.currentLanguage);
    return this.currentLanguage;
  }

  public getBrowserLang(): string {
    return this.browserLang;
  }

  public changeLangApp = (newLang: string): void => {
    this.setLanguage = {
      key: this.keyText,
      value: newLang,
    };

    this.localStorage.set(this.setLanguage);
    this.currentLanguage = newLang;
    this.useTranslate(newLang);
  };

  public useTranslate(lang: string) {
    this.translate.use(lang);
  }
}
