import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ShowCounterComponent } from '../show-counter/show-counter.component';
import { ChildofStudentComponent } from '../ChildOfStudent/childof-student/childof-student.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @ViewChild(ShowCounterComponent) _showCounterComp: ShowCounterComponent;

  // Using ViewChildren when there are multiple same comp. selector calls
  // @ViewChildren(ShowCounterComponent)
  // _showCounterComp: QueryList<ShowCounterComponent>;

  constructor() {} // private _childStudent: ChildofStudentComponent

  increment() {
    this._showCounterComp.incrementOne();

    //With ViewChildren
    // this._showCounterComp.first.incrementOne();  // Shows effect on first selector call
    // this._showCounterComp.last.incrementOne(); // Shows effect on last selector call
    // this._showCounterComp.forEach((element) => element.incrementOne()); // Shows effect on all selector calls
  }

  decrement() {
    this._showCounterComp.decrementOne();

    //With ViewChildren
    // this._showCounterComp.first.decrementOne();

    // Using filter() and find() With ViewChildren
    // this._showCounterComp.find((el) => el.name == 'Vaibhav').decrementOne();
    // this._showCounterComp
    //   .filter((el) => el.name == 'Rahul')
    //   .forEach((e) => e.decrementOne());

    // using Map() With ViewChildren
    // console.log(this._showCounterComp.map((el) => el.name));
  }

  // Testing Child Comp. call + its Dependency Injection together
  // It won't work as for DI it needs to be a service
  // We can access component using @ViewChild or @ContentChild
  // testDepInjonChildComp() {
  //   console.log(this._childStudent.name);
  // }
}
