import React from 'react';
import cars from '../modules/cars';

function Table() {
  // Destructure both car objects
  const [honda, tesla] = cars;

  // Destructuring Honda
  const {
    model: hondaModel,
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;

  // Destructuring Tesla
  const {
    model: teslaModel,
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{teslaModel}</td>
          <td>{teslaTopSpeed} mph</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{hondaModel}</td>
          <td>{hondaTopSpeed} mph</td>
          <td>{hondaTopColour}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
