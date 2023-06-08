import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState()

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr>
          <td>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Number</th>
            
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default TableGenerator;

