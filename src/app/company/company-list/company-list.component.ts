import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  compList: any;

  constructor() {}
  ngOnInit(): void {
    this.compList = [
      { name: 'HCL', country: 'India' },
      { name: 'Tech Mahindra', country: 'USA' },
      { name: 'Infosys', country: 'UK' },
      { name: 'Wipro', country: 'Hungary' },
    ];
  }
}
