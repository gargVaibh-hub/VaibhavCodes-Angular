import { ResolveFn, Router } from '@angular/router';
import { Book } from './book';
import { inject } from '@angular/core';
import { BookService } from './book.service';
import { map } from 'rxjs';

export const resolvGuard: ResolveFn<Book> = (route, state) => {
  const _bookService = inject(BookService);
  const _router = inject(Router);
  let bookId = route.paramMap.get('id');
  return _bookService.returnBookbyId(bookId).pipe(
    map((book: any) => {
      if (book.length > 0) {
        return book;
      } else {
        alert('Book Not Found!');
        _router.navigate(['/books']);
        return null;
      }
    })
  );
};
