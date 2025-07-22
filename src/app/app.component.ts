import { Component, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Emp } from './emp';
import { Color } from './color';
import { MessageService } from './message.service';
import { CookieService } from 'ngx-cookie-service';
import { BookService } from './book.service';
import { BookInMemory } from './book';
import { Observable, filter, from, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  viewProviders: [Emp],
})
export class AppComponent {
  title = 'vaibhavCodes';
  output: any;
  msg: Promise<string>;
  name: string = 'Vaibhav';

  constructor(
    private router: Router,
    private _emp: Emp,
    private _message: MessageService,
    private _cookie: CookieService,
    private _bookService: BookService
  ) {
    this.dataTypes();

    // Example of ENUM class Color
    let myColor: Color;
    myColor = Color.green;
    console.log(myColor, 'MY color value');

    this.msg = _message.getMessage();

    this.getBooksFromApi();
    this.getBookByIdApi();
    this.getRelatedBooks();
    this.mapAndFilterExam();
  }

  openMenu() {
    console.log('Success!');
    this.router.navigate(['implement']);
  }

  getData(evt: any) {
    this.output = evt;
  }

  dataTypes() {
    let a: any;
    console.log(typeof a); //undefined
    let list: Array<number> = [1, 2, 3, 4];
    // a = null;
  }

  isValid: boolean = true;
  change(value: boolean) {
    this.isValid = value;
  }

  isMale = 'Male';
  changeGender(value: string) {
    this.isMale = value;
  }

  // *ngFor implementation
  Employee = [
    { id: 6560, name: 'Vaibhav' },
    { id: 6559, name: 'Rahul' },
    { id: 6830, name: 'Shubham' },
  ];

  //*ngFor + NgSwitch implementation
  ids = [100, 201, 300, 403];

  onClick() {
    console.log('Button clicked!');
  }

  nameBinding: string = 'Vaibhav';

  customString =
    'Oh my god! Completely unexpected..probably the biggest podcast breakout in the country!';

  // Server side navigation example
  navigateToHome() {
    this.router.navigate(['home']);
  }

  setLocalStorageData() {
    localStorage.setItem('name', 'Vaibhav');
  }

  localName: any;
  getLocalStorageData() {
    this.localName = localStorage.getItem('name');
  }

  removeLocalStorageData() {
    localStorage.removeItem('name'); // Remove specific item from local storage
    // localStorage.clear(); // Clear all items from local storage
    this.localName = '';
  }

  getLocalStorageLength() {
    console.log('Local Storage Length:', localStorage.length);
  }

  displayLocalStorageData() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key!);
      console.log(key + ' ' + value);
    }
  }

  setCookieData() {
    this._cookie.set('name', 'Vaibhav');
  }

  myBooks: BookInMemory[] = [];
  myBooks$: Observable<BookInMemory[]> | undefined;
  // Inmemory Web API Example
  getBooksFromApi() {
    this._bookService.getBooksFromApi().subscribe((res) => {
      this.myBooks = res;
    });

    this.myBooks$ = this._bookService.getBooksFromApi(); // using async pipe
  }

  myBookId: BookInMemory[] = [];
  myBookId$: Observable<BookInMemory[]> | undefined;
  bookName: string | undefined;
  bookName2$: Observable<string> | undefined;
  getBookByIdApi() {
    this._bookService.getBookByIdFromApi(1).subscribe((res) => {
      this.myBookId = res;
    });

    this.myBookId$ = this._bookService.getBookByIdFromApi(3); // using async pipe and not use subscribe here

    // Implementation of MAP in Observable
    this._bookService
      .getBookByIdFromApi(2)
      .pipe(map((data) => data[0].name))
      .subscribe((res) => {
        this.bookName = res;
      });

    // Implementation of MAP in Observable using async pipe
    this.bookName2$ = this._bookService
      .getBookByIdFromApi(2)
      .pipe(map((data) => data[0]?.name ?? ''));
  }

  // Example of MergeMap to get related books
  relatedBooks: BookInMemory[] = [];
  relatedBooks2: BookInMemory[] = [];
  getRelatedBooks() {
    let categ: string = '';

    // In this way we have to subscribe two times
    this._bookService
      .getBookByIdFromApi(1)
      .pipe(map((data) => data[0].category))
      .subscribe((res) => {
        categ = res ?? '';
        this._bookService
          .getBookByCategoryFromApi(categ)
          .subscribe((relatedBooks) => {
            this.relatedBooks = relatedBooks;
          });
      });

    let categ2: string = '';
    // Using MergeMap to avoid nested subscriptions
    // Output of one subscribe becomes input of another
    this._bookService
      .getBookByIdFromApi(1)
      .pipe(
        mergeMap((data) => {
          categ2 = data[0].category ?? '';
          return this._bookService.getBookByCategoryFromApi(categ2);
        })
      )
      .subscribe((relatedBooks) => {
        this.relatedBooks2 = relatedBooks;
      });
  }

  mapAndFilterExam() {
    this._bookService.getNumbers().subscribe((numbers: number[]) => {
      from(numbers)
        .pipe(
          filter((num) => num % 2 === 0),
          map((num) => num * 10)
        )
        .subscribe((data) => {
          console.log('Mapped and Filtered Data:', data);
        });
    });
  }
}
