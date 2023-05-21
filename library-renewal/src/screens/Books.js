import React from 'react';
import './Books.css';


const Books = () => {
  return(
    <div className='box'>
      <header className='home-header'>
      <h1>
        <span></span> 신착/인기도서 <span></span>
      </h1>
    </header>
    <div className="new">
        <h4>신착도서</h4>
        <ul>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="thin"><p>책 제목</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="thin"><p>책 제목</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
        </ul>
    </div>
    <div className="best">
        <h4>인기도서</h4>
        <ul>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="thin"><p>책 제목</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="thin"><p>책 제목</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
            <li class="book"><p>책 제목 및 저자</p></li>
 
        </ul>
    </div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
    <div className="space-for-nav" style={{ height :"4rem" }}></div>
</div>

  )
};


export default Books;
