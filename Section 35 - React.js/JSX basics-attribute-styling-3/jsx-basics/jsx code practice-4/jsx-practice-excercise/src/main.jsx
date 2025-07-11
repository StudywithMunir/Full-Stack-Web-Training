import React from 'react';
import ReactDOM from 'react-dom/client';

// accessing root element from index.html
const rootElement = document.getElementById("root");

// creating root element
const root = ReactDOM.createRoot(rootElement);


// js variables for excercise
const name = "Munir";
const luckyNumber = 5;
const firstName = "Munir";
const lastName = "Butt";
const currentYear = new Date().getFullYear();

// rendering html
root.render(
  <React.StrictMode>
    {/* Challenge - 1  (jsx code practice)*/}
    <div>
      <h1>My Favorite Foods</h1>
      <ul>
        <li>Biryani</li>
        <li>Pulao</li>
        <li>Chicken</li>
      </ul>
    </div>

    {/* Challenge -2  (javascript expression and string literal)*/}
    <div>
      <h2>Hello {name}!</h2>
      <p>Your lucky number is: {luckyNumber}.</p>
    </div>

    {/* Challenge -3 (js expression and jsx practice) */}
    <div>
      <h3>Created by {`${firstName} ${lastName}`}</h3>
      <p>Copyright {currentYear}.</p>
    </div>
  </React.StrictMode>
);