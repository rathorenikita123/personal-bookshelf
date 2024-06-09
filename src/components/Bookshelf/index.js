import React from "react";
import "./style.css";

const Bookshelf = ({ books }) => {
  return (
    <div>
      <div className="bookshelf">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>Book Title: {book.title}</h3>
            <p>
              Author:{" "}
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
            <p>Edition Count: {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
