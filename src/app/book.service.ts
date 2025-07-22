import { Injectable } from '@angular/core';
import { Book, BookInMemory } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private book: Book[] = [
    { id: 1000, name: 'Physics', price: 1700, description: 'HC Verma' },
    { id: 1001, name: 'Chemistry', price: 1500, description: 'Pradeep' },
    { id: 1002, name: 'Maths', price: 1400, description: 'RD Sharma' },
    { id: 1003, name: 'English', price: 1300, description: 'JK Rowling' },
    {
      id: 1004,
      name: 'Computer Science',
      price: 1100,
      description: 'Sumita Arora',
    },
  ];

  private bookList: Book[] = this.book.concat([
    { id: 1005, name: 'Biology', price: 1200, description: 'NCERT' },
  ]);

  constructor(private httpClient: HttpClient) {}

  // To get the data as an API response, we use Observable
  returnBooks(): Observable<Book[]> {
    return of(this.bookList); // To check the Resolve guard implementation
  }

  // To get the data as an API response, we use Observable
  returnBooks2(): Observable<Book[]> {
    return of(this.book);
  }

  // To get the data as per Book Id
  // Function for implementation of Resolve Guard
  returnBookbyId(Id: any): Observable<Book[]> {
    const foundBook = this.book.find((b) => b.id == Id);
    return of(foundBook ? [foundBook] : []);
  }

  private apiUrl = '/api/books'; // Example of API URL for InMemoryWebAPI
  getBooksFromApi(): Observable<BookInMemory[]> {
    return this.httpClient.get<BookInMemory[]>(this.apiUrl);
  }

  getBookByIdFromApi(Bookid: number): Observable<BookInMemory[]> {
    return this.httpClient.get<BookInMemory[]>(this.apiUrl + '?id=' + Bookid);
  }

  getBookByCategoryFromApi(categ: string): Observable<BookInMemory[]> {
    return this.httpClient.get<BookInMemory[]>(
      this.apiUrl + '?category=' + categ
    );
  }

  getNumbers(): Observable<number[]> {
    return of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
}
