import { Component } from '@angular/core';

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrl: './implementation.component.scss'
})
export class ImplementationComponent {

  name: string = 'Vaibhav Garg';
  company: any;

  employee = {
    name: 'Vaibhav',
    role: 'Engineer',
    tech: 'Angular',
    age: 23
  }
}
