import { Component, Input } from '@angular/core';



import { Letter } from '../letter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() letter: Letter;

  private timer = 1000;
  timerID: number;
  isChecked: boolean;

  onSelect(item): void {
    const isValid = this.validate(item.innerText);

    if (isValid) {
      item.style.color = 'rgba(255,0,0, 1)';
    }

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

  private validate(item: string): boolean {
    return this.isChecked = item.toLowerCase() === this.letter.id.toLowerCase();
  }
}
