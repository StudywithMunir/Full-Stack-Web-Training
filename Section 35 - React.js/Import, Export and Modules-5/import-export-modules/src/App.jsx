import React from 'react'

// importing all variables/functions from math module
import { Pi, cube, doublePi, triplePi } from './modules/math';

import {add,subtract,multiply,division} from './modules/calculator';

function App() {
  return <div>
    <ul>
      <li>{Pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
      <li>{cube * 3}</li>
    </ul>

    <h2>Math Calculator</h2>
    <ul>
      <li>{add(5,5)}</li>
      <li>{subtract(10,5)}</li>
      <li>{multiply(2,5)}</li>
      <li>{division(10,2)}</li>
    </ul>
  </div>;
}

export default App;