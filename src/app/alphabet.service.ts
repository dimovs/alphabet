import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

import { LETTERS } from './mock-data';
import { Letter } from './letter';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {
  storageKey = 'alphabet';

  constructor(private storage: LocalStorageService) { }

  getAlphabet(): Observable<Letter[]> {
    const data = this.storage.get(this.storageKey);

    if (data) {
      return of(data);
    }

    this.storeAlphabet(LETTERS);
    return of(LETTERS);
  }

  storeAlphabet(letters: Letter[]): void {
    this.storage.set(this.storageKey, letters);
  }
}
