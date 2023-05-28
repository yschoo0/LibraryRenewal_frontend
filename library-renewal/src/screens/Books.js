import React, { useEffect, useState } from 'react';
import './Books.css';
import booksData from './newdata.json';
import bestData from './bestdata.json';

const Books = () => {
  const [limitedBooksData, setLimitedBooksData] = useState([]);
  const [limitedBestData, setLimitedBestData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredBestIndex, setHoveredBestIndex] = useState(-1);

  useEffect(() => {
    const shuffledBooks = shuffle(booksData);
    const shuffledBestBooks = shuffle(bestData);

    const limitedBooks = shuffledBooks.slice(0, 7);
    const limitedBestBooks = shuffledBestBooks.slice(0, 7);

    setLimitedBooksData(limitedBooks);
    setLimitedBestData(limitedBestBooks);
  }, []);

  const handleMouseEnter = (index, isBest) => {
    if (isBest) {
      setHoveredBestIndex(index);
    } else {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = (isBest) => {
    if (isBest) {
      setHoveredBestIndex(-1);
    } else {
      setHoveredIndex(-1);
    }
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
        <h5>신착도서</h5>
        <ul>
          {limitedBooksData.map((book, index) => (
            <li
              className={`book ${hoveredIndex === index ? 'hovered' : ''}`}
              key={book.id}
              style={{
                backgroundImage: hoveredIndex === index ? 'none' : `url(${book.image})`,
                backgroundColor: hoveredIndex === index ? '#394867' : ''
              }}
              onMouseEnter={() => handleMouseEnter(index, false)}
              onMouseLeave={() => handleMouseLeave(false)}
            >
              <p>{book.title} - {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="best">
        <h5>인기도서</h5>
        <ul>
          {limitedBestData.map((book, index) => (
            <li
              className={`book ${hoveredBestIndex === index ? 'hovered' : ''}`}
              key={book.id}
              style={{
                backgroundImage: hoveredBestIndex === index ? 'none' : `url(${book.image})`,
                backgroundColor: hoveredBestIndex === index ? '#394867' : ''
              }}
              onMouseEnter={() => handleMouseEnter(index, true)}
              onMouseLeave={() => handleMouseLeave(true)}
            >
              <p>{book.title} - {book.author}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Books;
