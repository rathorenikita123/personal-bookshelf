import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookSearch from "../../components/BookSearch";
import "./style.css";

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container-search">
      <div className="bookshelf-search">
        <Link to="/bookshelf">
          <button>My Bookshelf</button>
        </Link>
      </div>
      <h1>Search by book name:</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
