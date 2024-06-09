import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../../components/Bookshelf";
import "./style.css";

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div className="container-bookshelf">
      <div className="link">
        <Link to="/">
          <button>Back to Search</button>
        </Link>
      </div>
      <h1>My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
