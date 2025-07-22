import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.scss',
})
export class BookdetailsComponent implements OnInit {
  bookId: number = 0;
  bookDetail: any;
  bookResponse: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    // this.bookId = this.route.snapshot.params['id']; // Method 1 Old syntax
    // this.bookId = parseInt(this.route.snapshot.paramMap.get('id') || '0'); // Method 2 New syntax
    // Method 3 using Observables Old syntax
    // this.route.params.subscribe((res) => {
    //   this.bookId = res['id'];
    // });
    // Method 4 using Observables New syntax
    this.route.paramMap.subscribe((res) => {
      this.bookId = parseInt(res.get('id') || '0');
    });
    console.log('Book ID:', this.bookId);
    this.getBookDetails();
  }

  getBookDetails() {
    this.bookService.returnBooks2().subscribe((res) => {
      this.bookResponse = res;
    });
    this.bookDetail = this.bookResponse.filter(
      (item: any) => item.id == this.bookId
    );
    console.log('Book Details:', this.bookDetail);
  }

  goBack() {
    this.location.back();
  }
}
