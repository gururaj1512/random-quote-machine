import './App.css';
import React, { useState } from 'react';
import Quotes from './Components/quotes.json';
import Twitter from './twitter.svg';

const getRandomColor = () => {
  const red = Math.floor(Math.random()*128);
  const blue = Math.floor(Math.random()*128);
  const green = Math.floor(Math.random()*128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {

  const [articles, setArticles] = useState(Quotes.quotes[0].quote)
  const [author, setAuthor] = useState(Quotes.quotes[0].author)
  const [randomColor, setRandomColor] = useState(getRandomColor());

  let quoteNumber = Math.floor(Math.random() * Quotes.quotes.length);
  let changeQuote = () => {
    quoteNumber++
    console.log(quoteNumber);
    setArticles(Quotes.quotes[quoteNumber].quote)
    setAuthor(Quotes.quotes[quoteNumber].author)
    setRandomColor(getRandomColor())
  }

  return (
    <div className="App" style={{backgroundColor: randomColor}}>
      <div className="quotebox" id="quote-box">
        <div className="text" id="text" style={{color: randomColor}}>{articles}</div>
        <div className="author" id="author" style={{color: randomColor}}>-{author}</div>
        <div id='abcd'>
          <div id="new-quote">
            <button className="btn btn-primary" onClick={changeQuote} style={{backgroundColor: randomColor}}>New Quote</button>
          </div>
          <div id="tweet-quote" style={{backgroundColor: randomColor}}>
            <a href="." target='_blank'><img src={Twitter} alt="" id='img' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;