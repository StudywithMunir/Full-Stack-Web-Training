import React, {useState} from 'react'

function Timer() {
    let now = new Date().toLocaleTimeString(); //stores current Time
    let [time,setTime] = useState(now); //set the current time inside time state variable

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime); //calling state function and passing current time inside it
    }

    // this will reload the updateTime function after every second
    setInterval(updateTime,1000);

    return (
    <div className="container">
      <h1>{time}</h1>
      <button>{updateTime}Get Time</button>
    </div>
  );
}

export default Timer;





//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);