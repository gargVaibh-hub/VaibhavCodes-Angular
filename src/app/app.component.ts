import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Emp } from './emp';
import { Color } from './color';
import { MessageService } from './message.service';
import { CookieService } from 'ngx-cookie-service';
import { BookService } from './book.service';
import { BookInMemory } from './book';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  filter,
  from,
  map,
  mergeMap,
} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import $ from 'jquery';

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
    private _bookService: BookService,
    private elref: ElementRef
  ) {
    // Concatenation of STRING and OBJECT is not possible, example
    console.log('String' + { id: 1, name: Object });

    // Advance Observables - Subject and BehaviorSubject
    this.advaceObservables();

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
    this.filterAllBooks('html');
    this.validteApiCall();
    this.jqueryExam();
    // elref.nativeElement.style.color = 'green';
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

    // No need to subscribe in Async Pipe method
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

  searchBook: BookInMemory[] = [];
  paramRes: BookInMemory[] = [];
  // HttpClient Request Example with Headers
  filterAllBooks(categ) {
    this._bookService.filterBooks(categ).subscribe((res) => {
      this.searchBook = res;
      // console.log(res, 'HttpHeader Res');
    });

    this._bookService.filterBookParam(categ).subscribe((res) => {
      this.paramRes = res;
      console.log(res, 'httpparam response');
    });
  }

  // Error handling example
  validteApiCall() {
    this._bookService.handleApiError().subscribe(
      (res) => {
        console.log(res, 'Api Response');
      },
      // (err) => {
      //   alert('404 API Not Found');
      // }
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Client side or network related issue
          console.log('error is: ' + err.error.message);
        } else {
          // Backend related issue
          console.log('Status code: ' + err.status);
          console.log('Status text: ' + err.statusText);
          console.log(err);
        }
      }
    );
  }

  // Http Post request example
  savedata() {
    let newBooks = { id: 10, name: 'Node JS', category: 'Development' };
    this.addBookPost(newBooks);
  }

  addBookPost(book: BookInMemory) {
    this._bookService.postBook(book).subscribe((res) => {
      console.log(res);
    });
  }

  // Http Put request example
  updatedata() {
    let changeBooks = { id: 6, name: 'Angular JS', category: 'FrontEnd' };
    this.updBookPut(changeBooks);
  }

  updatedRes: BookInMemory[] = [];
  updBookPut(upbook: BookInMemory) {
    this._bookService.updateBook(upbook).subscribe((res) => {
      console.log(res);
      this._bookService.getBooksFromApi().subscribe((res) => {
        this.updatedRes = res;
      });
    });
  }

  // Http Delete request example
  deletedata() {
    this.delBook(1);
  }

  deletedRes: BookInMemory[] = [];
  delBook(delbookId: number) {
    this._bookService.deleteBook(delbookId).subscribe((res) => {
      console.log(res);
      this._bookService.getBooksFromApi().subscribe((res) => {
        this.deletedRes = res;
      });
    });
  }

  jqueryExam() {
    $(document).ready(function () {
      $('button').click(function () {
        $('#div1').fadeIn();
        $('#div2').fadeIn('slow');
        $('#div3').fadeIn(3000);
      });
    });
  }

  // HostBinding sets the properties on the element
  // @HostBinding('style.color') myColor = 'red';
  // @HostBinding('style.background-color') mybgColor = 'blue';

  // HostListener event example combined with HostBinding
  // @HostListener('click') myClick() {
  //   // alert('Not allowed!');
  //   this.myColor = 'yellow';
  // }

  // @HostBinding('style.font-size') mySize = '12px';
  // @HostListener('mouseover') onMouseOver() {
  //   this.mySize = '40px';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.mySize = '15px';
  // }

  advaceObservables() {
    // Subject
    const subj = new Subject();
    subj.subscribe((res) => console.log('Subscription 1: ' + res));
    subj.next(100);
    subj.next('Vaibhav');

    // Behavior Subject
    const behSubj = new BehaviorSubject(1000); // Needs initial value of any data-type
    behSubj.subscribe((val) => console.log('Behavior subscription: ' + val)); // Without NEXT getting default value
    behSubj.next(2000);
    // behSubj.next('Vaibhav');  // STRING not accepted since default value is numeric

    // Replay Subject
    // const repSub1 = new ReplaySubject(); // Returns all values
    const repSub1 = new ReplaySubject(2); // this value is limit of replay from last

    repSub1.next(122);
    repSub1.next(133);
    repSub1.next(144);
    repSub1.next(155);
    repSub1.subscribe((value) => console.log('Replay subscription: ' + value)); // Returns all assigned values
  }
}
