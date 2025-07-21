import React from "react";
import Form from "./components/Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form
      // sending prop to form.jsx 
      isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
