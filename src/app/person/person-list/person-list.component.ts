import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss',
})
export class PersonListComponent implements OnInit {
  personData: any;

  constructor() {}

  ngOnInit(): void {
    this.personData = [
      { name: 'Vaibhav Garg', country: 'Netherlands' },
      { name: 'Rohan Gupta', country: 'Iceland' },
      { name: 'Pawan Kumar', country: 'Spain' },
      { name: 'Neha Aggarwal', country: 'Maldives' },
    ];
  }
}
