// import React, { useEffect, useState } from 'react';
// import './Books.css';
// import booksData from './newdata.json';
// import bestData from './bestdata.json';

// const Books = () => {
//   const [limitedBooksData, setLimitedBooksData] = useState([]);
//   const [limitedBestData, setLimitedBestData] = useState([]);

//   useEffect(() => {
//     const shuffledBooks = shuffle(booksData);
//     const shuffledBestBooks = shuffle(bestData);

//     const limitedBooks = shuffledBooks.slice(0, 7);
//     const limitedBestBooks = shuffledBestBooks.slice(0, 7);

//     setLimitedBooksData(limitedBooks);
//     setLimitedBestData(limitedBestBooks);
//   }, []);

//   const handleMouseEnter = (bookId) => {
//     const updatedBooksData = limitedBooksData.map((book) => {
//       if (book.id === bookId) {
//         return { ...book, hovered: true };
//       }
//       return book;
//     });
//     setLimitedBooksData(updatedBooksData);
//   };

//   const handleMouseLeave = () => {
//     const updatedBooksData = limitedBooksData.map((book) => {
//       return { ...book, hovered: false };
//     });
//     setLimitedBooksData(updatedBooksData);
//   };

//   function shuffle(array) {
//     let currentIndex = array.length;
//     let temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }

//   return (
//     <div className='box'>
//       <header className='home-header'>
//         <h1>
//           <span></span> 신착/인기도서 <span></span>
//         </h1>
//       </header>
//       <div className="new">
//         <h4>신착도서</h4>
//         <ul>
//           {limitedBooksData.map((book) => (
//             <li
//               className={`book ${book.hovered ? 'hovered' : ''}`}
//               key={book.id}
//               style={{ backgroundImage: `url(${book.image})` }}
//               onMouseEnter={() => handleMouseEnter(book.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="best">
//         <h4>인기도서</h4>
//         <ul>
//           {limitedBestData.map((book) => (
//             <li className="book" key={book.id} style={{ backgroundImage: `url(${book.image})` }}>
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//       <div className="space-for-nav" style={{ height: "4rem" }}></div>
//     </div>
//   );
// };

// export default Books;
// import React, { useEffect, useState } from 'react';
// import './Books.css';
// import booksData from './newdata.json';
// import bestData from './bestdata.json';

// const Books = () => {
//   const [limitedBooksData, setLimitedBooksData] = useState([]);
//   const [limitedBestData, setLimitedBestData] = useState([]);

//   useEffect(() => {
//     const shuffledBooks = shuffle(booksData);
//     const shuffledBestBooks = shuffle(bestData);

//     const limitedBooks = shuffledBooks.slice(0, 7);
//     const limitedBestBooks = shuffledBestBooks.slice(0, 7);

//     setLimitedBooksData(limitedBooks);
//     setLimitedBestData(limitedBestBooks);
//   }, []);

//   const handleMouseEnter = (bookId) => {
//     const updatedBooksData = limitedBooksData.map((book) => {
//       if (book.id === bookId) {
//         return { ...book, hovered: true };
//       }
//       return book;
//     });
//     setLimitedBooksData(updatedBooksData);
//   };

//   const handleMouseLeave = () => {
//     const updatedBooksData = limitedBooksData.map((book) => {
//       return { ...book, hovered: false };
//     });
//     setLimitedBooksData(updatedBooksData);
//   };

//   function shuffle(array) {
//     let currentIndex = array.length;
//     let temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }

//   return (
//     <div className='box'>
//       <header className='home-header'>
//         <h1>
//           <span></span> 신착/인기도서 <span></span>
//         </h1>
//       </header>
//       <div className="new">
//         <h4>신착도서</h4>
//         <ul>
//           {limitedBooksData.map((book) => (
//             <li
//               className={`book ${book.hovered ? 'hovered' : ''}`}
//               key={book.id}
//               style={{
//                 backgroundImage: book.hovered ? 'none' : `url(${book.image})`,
//                 backgroundColor: book.hovered ? 'darkblue' : ''
//               }}
//               onMouseEnter={() => handleMouseEnter(book.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="best">
//         <h4>인기도서</h4>
//         <ul>
//           {limitedBestData.map((book) => (
//             <li className="book" key={book.id} style={{ backgroundImage: `url(${book.image})` }}>
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Rest of the code */}
//     </div>
//   );
// };

// export default Books;
// import React, { useEffect, useState } from 'react';
// import './Books.css';
// import booksData from './newdata.json';
// import bestData from './bestdata.json';

// const Books = () => {
//   const [limitedBooksData, setLimitedBooksData] = useState([]);
//   const [limitedBestData, setLimitedBestData] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(-1);

//   useEffect(() => {
//     const shuffledBooks = shuffle(booksData);
//     const shuffledBestBooks = shuffle(bestData);

//     const limitedBooks = shuffledBooks.slice(0, 7);
//     const limitedBestBooks = shuffledBestBooks.slice(0, 7);

//     setLimitedBooksData(limitedBooks);
//     setLimitedBestData(limitedBestBooks);
//   }, []);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(-1);
//   };

//   function shuffle(array) {
//     let currentIndex = array.length;
//     let temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }

//   return (
//     <div className='box'>
//       <header className='home-header'>
//         <h1>
//           <span></span> 신착/인기도서 <span></span>
//         </h1>
//       </header>
//       <div className="new">
//         <h4>신착도서</h4>
//         <ul>
//           {limitedBooksData.map((book, index) => (
//             <li
//               className={`book ${hoveredIndex === index ? 'hovered' : ''}`}
//               key={book.id}
//               style={{
//                 backgroundImage: hoveredIndex === index ? 'none' : `url(${book.image})`,
//                 backgroundColor: hoveredIndex === index ? 'darkblue' : ''
//               }}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="best">
//         <h4>인기도서</h4>
//         <ul>
//           {limitedBestData.map((book) => (
//             <li className="book" key={book.id} style={{ backgroundImage: `url(${book.image})` }}>
//               <p>{book.title} - {book.author}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Rest of the code */}
//     </div>
//   );
// };

// export default Books;
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
      {/* Rest of the code */}
    </div>
  );
};

export default Books;
