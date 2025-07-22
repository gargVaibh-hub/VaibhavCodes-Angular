import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookInMemory } from './book';

export class TestData implements InMemoryDbService {
  // Example of InMemoryWebAPI
  createDb() {
    let bookDetails: BookInMemory[] = [
      { id: 1, name: 'Angular', category: 'Programming' },
      { id: 2, name: 'JavaScript', category: 'html' },
      { id: 3, name: 'Python', category: 'Programming' },
      { id: 4, name: 'C++', category: 'Programming' },
      { id: 5, name: 'Java', category: 'Programming' },
      { id: 6, name: 'Angular', category: 'Programming' },
      { id: 7, name: 'JavaScript', category: 'html' },
      { id: 8, name: 'Angular', category: 'Programming' },
      { id: 9, name: 'JavaScript', category: 'html' },
    ];
    return { books: bookDetails }; // Example of Aliasing here
  }
}
