import React, { useState } from 'react'

function App(){

  // useState array
  const [heading,setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  // Event Listener
  function handleClick() {
    setHeading("Submitted");
  }

  // Mouse Event
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* if the value of isMouseOver state variable is true the color changes to black else white */}
      <button onClick={handleClick} onMouseOver={handleMouseOver} style={{backgroundColor: isMouseOver ? "black" : "white"}} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;