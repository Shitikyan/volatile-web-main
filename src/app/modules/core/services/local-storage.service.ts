import { Injectable } from '@angular/core';
import { ILocalStorage } from 'environments/types';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  set(setItem: ILocalStorage): void {
    localStorage.setItem(setItem.key, setItem.value)
  }
  get(key: string): any {
    return localStorage.getItem(key);
  }
}
