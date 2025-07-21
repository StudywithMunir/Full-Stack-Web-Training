import React from 'react'

function App(){

  // using Imperative Programming (exactly asking to do something)

  // function to pass in onClick Event
  function strike(){
    document.getElementById("strikePara").style.textDecoration = "line-through";
  }

  function unstrike(){
    document.getElementById("strikePara").style.textDecoration = "none";
  }

  return (
    <div>
      <p id='strikePara'>Buy some Cookies</p>
      {/* depending on which button is clicked the para changes its appearence */}
      <button onClick={strike}>Strike Through</button>
      <button onClick={unstrike}>Remove Strike Through</button>
    </div>
    
  );
}

export default App;