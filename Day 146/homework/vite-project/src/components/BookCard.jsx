import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, imageLinks, description } = book.volumeInfo;

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>{authors?.join(", ")}</p>
      {imageLinks?.thumbnail && <img src={imageLinks.thumbnail} alt={title} />}
      <p>{description?.substring(0, 100)}...</p>
    </div>
  );
};

export default BookCard;
