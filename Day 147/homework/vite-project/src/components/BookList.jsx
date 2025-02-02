import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
