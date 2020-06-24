import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlphabet();
    this.location.go( `/challenge/${this.selectedLetter.id}` );
  }

  getAlphabet(): void {
    this.alphabetService.getAlphabet()
      .subscribe(letters => {
        this.letters = letters;

        const id = this.route.snapshot.paramMap.get('id');
        const letter = this.letters.find(item => item.id === id);

        this.selectedLetter = letter ? letter : this.letters[0];
      });
  }

  onSelect(letter: Letter): void {
    this.selectedLetter = letter;
    this.location.go( `/challenge/${this.selectedLetter.id}` );
  }
}
