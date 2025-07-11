import React from "react";

// Importing our custom components
import Heading from "./heading";
import List from "./list";
import CustomHeading from "./customHeading";

function App() {
  // div will the child of root div from main.js
  return <div>
    {/* calling our custom components */}
    {/* <Heading />
    <List /> */}

    {/* Calling Custom Component of Challenge */}
    <CustomHeading />
  </div>;
}

export default App
