export class Book {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
}

export class BookInMemory {
  id?: number;
  name?: string;
  category?: string;
}

// For HttpClient Example
export interface Books {
  id?: number;
  name?: string;
  category?: string;
  year?: string;
}
