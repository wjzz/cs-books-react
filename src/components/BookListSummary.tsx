import React from "react";

import { BookData } from "./Books";

interface Props {
  books: BookData[];
  toggleAll(intoRead: boolean): void;
  sortByTitle(): void;
  sortByKey(): void;
}

const BookListSummary: React.FC<Props> = (props: Props) => {
  const { books, toggleAll, sortByKey, sortByTitle } = props;

  const books_number = books.length;
  const books_read = books.filter(book => book.read).length;
  const percentage = ((books_read * 100) / books_number).toFixed(0);
  const books_plurarize = books_read === 1 ? "book" : "books";

  const total_books_info = `There are ${books_number} books in total.`;
  const read_books_info = `You have read ${books_read} ${books_plurarize}, which is ${percentage}% of all available books.`;
  const mark_all_unread_btn = (
    <button id="read-none" onClick={() => toggleAll(false)}>
      Mark all as unread
    </button>
  );
  const mark_all_read_btn = (
    <button id="read-all" onClick={() => toggleAll(true)}>
      Mark all as read
    </button>
  );

  return (
    <div>
      {total_books_info} <br />
      {read_books_info}
      <br />
      {mark_all_unread_btn}
      <span> </span>
      {mark_all_read_btn}
      <br />
      <button onClick={sortByTitle}>Sort by title</button>
      <span> </span>
      <button onClick={sortByKey}>Sort by key</button>
    </div>
  );
};

export default BookListSummary;
