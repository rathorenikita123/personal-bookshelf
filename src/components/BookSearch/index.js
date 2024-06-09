import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard';
import "./style.css"

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addedBooks, setAddedBooks] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
        setResults(response.data.docs);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  const handleAddToBookshelf = (book) => {
    const updatedBookshelf = [...addedBooks, book];
    setAddedBooks(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    addToBookshelf(book);
  };

  const isBookAdded = (book) => {
    return addedBooks.some(addedBook => addedBook.key === book.key);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
      <div className="results">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          results.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              addToBookshelf={handleAddToBookshelf}
              isAdded={isBookAdded(book)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BookSearch;
