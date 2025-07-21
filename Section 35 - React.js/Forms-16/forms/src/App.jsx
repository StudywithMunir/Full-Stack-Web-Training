import React, { useState } from "react";

function App() {

  const [name,setName] = useState("");
  const [headingText,setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  // when button clicked it shows name value inside headingText
  function handleClick(event) {
    setHeadingText(name);

    // preventing the form from refresh
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
        <form onSubmit={handleClick}>
        <input type="text" placeholder="What's your name?" onChange={handleChange}  value={name}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
