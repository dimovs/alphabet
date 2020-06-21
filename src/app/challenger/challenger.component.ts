import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlphabetService } from '../alphabet.service';
import {Letter} from '../letter';

@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.scss']
})
export class ChallengerComponent implements OnInit {
  letters: Letter[];
  selectedLetter: Letter;

  constructor(
    private alphabetService: AlphabetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAlphabet();
  }

  getAlphabet(): void {
    this.alphabetService.getAlphabet()
      .subscribe(letters => {
        this.letters = letters;

        const id = this.route.snapshot.paramMap.get('id');
        const letter = this.letters.find(item => item.id === id);

        if (letter) {
          this.selectedLetter = letter;
        }
      });
  }

  onSelect(letter: Letter): void {
    this.selectedLetter = letter;
  }
}
