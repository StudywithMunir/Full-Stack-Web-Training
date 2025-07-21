// To use Hooks like useState, we must use them inside a functional component.
// For example, we cannot use them directly in main.jsx (which is usually just a setup file).
// So, we define a separate functional component like App.jsx.

import React, { useState } from 'react'; // Importing the useState Hook from React

function App() {
  // useState returns an array with two elements: [stateValue, setStateFunction]
  // We can use array destructuring to extract these values.
  
  const [count, setCount] = useState(0); // Initializing count with 0

  function increase() {
    // Calling the setCount function to update the state
    setCount(count + 1); // This triggers a re-render with the updated count
  }

  function decrease() {
    // Decreases the count by 1 only if it's greater than 0
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
