import React, { useState } from "react";

function App() {

  const [contact, setContact] = useState(
    {
      // default values for object properties
    fName: "",
    lName: "",
    email: ""
  }
);

  function handleChange(event) {
    // destructuring name and value from event.target object
    const {name,value} = event.target;

    setContact((prevValue)=>{
      // returning an object
      return {
        ...prevValue, ...prevValue, // copies previous state values (e.g., fName, lName, email) so they’re not lost when updating just one field
        [name]: value, // sets the key based on the input's name. If name is "fName" and value is "Munir", this becomes { fName: "Munir" }
      };
    });
  }

  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  function handleSubmit(event) {
    event.preventDefault(); // prevent page refresh
    setIsSubmitted(true);   // set submission flag
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      {/* Show message after submit (if the condition is true then it only displayed usinh &&)*/}
      {isSubmitted && <p style={{ color: "green" }}>Form submitted ✅</p>}
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName}/>
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName}/>
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
