import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  bookData: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.returnBooks().subscribe((res) => (this.bookData = res));
  }
}
