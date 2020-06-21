import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    if (this.isLocalStorageAvailable) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  set(key: string, value: any): void {
    if (this.isLocalStorageAvailable) {
      this.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get isLocalStorageAvailable(): boolean {
    return !!this.localStorage;
  }
}
