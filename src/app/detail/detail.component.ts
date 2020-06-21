import { Component, OnInit , Input } from '@angular/core';

import { Letter } from '../letter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() letter: Letter;

  private timer = 1000;
  timerID: number;
  isChecked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: string): void {
    this.validate(item);
    this.showMessage();
  }

  showMessage(): void {
    if (this.timerID) {
      clearTimeout(this.timerID);
      this.timerID = null;
    }

    this.timerID = setTimeout(() => {
      this.timerID = null;
    }, this.timer);
  }

  private validate(item: string): void {
    this.isChecked = item.toLowerCase() === this.letter.id.toLowerCase();
  }
}
