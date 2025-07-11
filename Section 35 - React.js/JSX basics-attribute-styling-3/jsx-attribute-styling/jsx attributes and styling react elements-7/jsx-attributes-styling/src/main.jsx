import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// For Html Atttributes in JSX (list of attributes)
// https://www.w3schools.com/tags/ref_standardattributes.asp

// js variables
let heading = "";
let customStyle = {};
const currentHour = new Date().getHours(); //0-23

// 0–11 → Morning
if (currentHour < 12) {
  heading = "Good morning";
  // using . notation to create a property of customStyle object
  customStyle.color = "red";
// 12–17 → Afternoon
} else if (currentHour < 18) {
  heading = "Good afternoon";
  customStyle.color = "green";
// 18–23 → Evening/Night
} else {
  heading = "Good evening";
  customStyle.color = "blue";
}

root.render(
  <React.StrictMode>
    <div>
      <h1 style={customStyle}>{heading}</h1>
    </div>
  </React.StrictMode>
);