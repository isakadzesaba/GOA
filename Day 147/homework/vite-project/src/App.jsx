import React, { useState } from "react";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <h1>Book Library App</h1>
      <BookSearch onSearch={fetchBooks} />
      <BookList books={books} />
    </div>
  );
};

export default App;
 