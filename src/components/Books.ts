export interface Book {
    title: string;
    src: string;
}

export interface BookData {
    index: number;
    book: Book;
    read: boolean;
}

const initial_books : Book[] = [
    {
      title: "You don't know JS: Up & Going",
      src: "up.jpg",
    },
    {
      title: "Structure and Interpretation of Computer Programs",
      src: "sicp.jpg",
    },
    {
      title: "Types and Programming Languages",
      src: "tapl.jpg",
    },
    {
      title: "Eloquent JavaScript",
      src: "eloquent.jpg",
    },
  ]
  
  export function getUserBookData(): BookData[] {
    const books: BookData[] = []; 
    initial_books.forEach((book, index) => {
      const read = (localStorage.getItem(String(index)) === "true");
      books.push({book, index, read});
    });
    return books;  
  }
  
  export function saveUserBookData(booksData: BookData[]): void {
    booksData.forEach((book, index) => {
      const [key, value] = [String(index), String(book.read)];
      localStorage.setItem(key, value);
    });
  }
  