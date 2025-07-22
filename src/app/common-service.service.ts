import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  private list: number[] = [100];
  constructor() {}

  addNumber(val: number) {
    this.list.push(val);
  }

  returnNumber() {
    return this.list;
  }
}
