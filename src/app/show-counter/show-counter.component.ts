import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrl: './show-counter.component.scss',
})
export class ShowCounterComponent {
  countValue: number = 0;

  @Input() name: string;

  incrementOne() {
    this.countValue += 1;
  }

  decrementOne() {
    this.countValue -= 1;
  }
}
