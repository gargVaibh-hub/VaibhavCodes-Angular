import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss',
})
export class Example1Component implements OnInit {
  constructor(private _commonService: CommonServiceService) {}

  numList: number[] = [];

  ngOnInit() {
    this.numList = this._commonService.returnNumber();
  }

  add(value: any) {
    this._commonService.addNumber(value);
    this.numList = this._commonService.returnNumber();
  }
}
