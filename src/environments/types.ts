import { Themes } from '@configs/themes/types';

export interface IEnvironment {
  production: boolean;
  languages: Array<string>;
  languagesDisplay: Array<ILanguage>;
  defaultLanguage: string;
  darkTheme?: string;
  defaultTheme: Themes;
  emailServiceID?: string;
  emailTemplateID?: string;
  emailUserID?: string;
}

export interface ILanguage {
  lang: string;
  displayLang: string;
}

export interface ILocalStorage {
  key: string;
  value: any;
}
