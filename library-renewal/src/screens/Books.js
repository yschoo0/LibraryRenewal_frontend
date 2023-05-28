import React, { useEffect, useState } from 'react';
import './Books.css';
import booksData from './newdata.json';
import bestData from './bestdata.json';

const Books = () => {
  const [limitedBooksData, setLimitedBooksData] = useState([]);
  const [limitedBestData, setLimitedBestData] = useState([]);

  useEffect(() => {
    const shuffledBooks = shuffle(booksData);
    const shuffledBestBooks = shuffle(bestData);

    const limitedBooks = shuffledBooks.slice(0, 7);
    const limitedBestBooks = shuffledBestBooks.slice(0, 7);

    setLimitedBooksData(limitedBooks);
    setLimitedBestData(limitedBestBooks);
  }, []);

  const handleMouseEnter = (bookId) => {
    const updatedBooksData = limitedBooksData.map((book) => {
      if (book.id === bookId) {
        return { ...book, hovered: true };
      }
      return book;
    });
    setLimitedBooksData(updatedBooksData);
  };

  const handleMouseLeave = () => {
    const updatedBooksData = limitedBooksData.map((book) => {
      return { ...book, hovered: false };
    });
    setLimitedBooksData(updatedBooksData);
  };

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <div className='box'>
      <header className='home-header'>
        <h1>
          <span></span> 신착/인기도서 <span></span>
        </h1>
      </header>
      <div className="new">
        <h4>신착도서</h4>
        <ul>
          {limitedBooksData.map((book) => (
            <li
              className={`book ${book.hovered ? 'hovered' : ''}`}
              key={book.id}
              style={{ backgroundImage: `url(${book.image})` }}
              onMouseEnter={() => handleMouseEnter(book.id)}
              onMouseLeave={handleMouseLeave}
            >
              <p>{book.title} - {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="best">
        <h4>인기도서</h4>
        <ul>
          {limitedBestData.map((book) => (
            <li className="book" key={book.id} style={{ backgroundImage: `url(${book.image})` }}>
              <p>{book.title} - {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
      <div className="space-for-nav" style={{ height: "4rem" }}></div>
    </div>
  );
};

export default Books;
