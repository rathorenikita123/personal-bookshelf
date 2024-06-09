import React from "react";
import "./style.css";

const BookCard = ({ book, addToBookshelf, isAdded }) => {
  return (
    <div className="book-card">
      <h3>Book Title: {book.title}</h3>
      <p>
        Author:{" "}
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p>Edition Count: {book.edition_count}</p>

      {isAdded ? (
        ""
      ) : (
        <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
