import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private _router: Router, private _loc: Location) {}

  // Passing parameters in router link
  goToAboutUs() {
    // Passing param as Query String
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     firstname: 'Vaibhav',
    //     lastname: 'Garg',
    //     age: 23,
    //   },
    // };
    // this._router.navigate(['/aboutus'], navigationExtras);

    // Another way of passing parameters as Query String
    this._router.navigate(['/aboutus'], {
      queryParams: {
        firstname: 'Vaibhav',
        lastname: 'Garg',
        age: 23,
      },
    });

    // To calculate the state of the navigation, we can use the following method
    console.log('Navigation state 1 method', history.state);
    console.log('Navigation state 2 method', this._loc.getState());
  }
}
