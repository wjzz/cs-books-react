import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";

import { getUserBookData, saveUserBookData } from "./Books";
import BookList from './BookList';


const App: React.FC = () => {
  const initial_user_book_data = getUserBookData();
  const [books, setBooks] = useState(initial_user_book_data);

  const handleToggleRead = (index: number) => {
    const newBooks = [...books];
    const bookToChange = books[index];
    newBooks[index] = {...bookToChange, read: !bookToChange.read};
    
    saveUserBookData(newBooks);
    setBooks(newBooks);
  }

  const handleToggleAll = (value: boolean) => {
    const newBooks = books.map(book => ({...book, read: value}));

    saveUserBookData(newBooks);
    setBooks(newBooks);
  }

  const handleSortByTitle = () => {
    const newBooks = [...books].sort((a, b) => a.book.title > b.book.title ? 1 : -1);
    setBooks(newBooks);
  }

  const handleSortByKey = () => {
    const newBooks = [...books].sort((a, b) => a.index - b.index);
    setBooks(newBooks);
  }

  return (
    <Router>
      <BookList 
        books={books}
        toggleRead={handleToggleRead}
        toggleAll={handleToggleAll}
        sortByTitle={handleSortByTitle}
        sortByKey={handleSortByKey}
      />
    </Router>
  );
}

export default App;
