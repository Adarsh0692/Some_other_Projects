import React, { useState } from "react";

export default function Calculator() {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState()
  return (
    <div>
      <h1>Simple Calculator</h1>
      <div className="inputs">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter any Number" /> &nbsp;
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter any Number" />
      </div>
      <div>
         <h1>{result}</h1>
      </div>
      <div className="btns">
        <button onClick={() => setResult(parseFloat(num1) + parseFloat(num2))}>Addition</button> &nbsp;
        <button onClick={() => setResult(parseFloat(num1) - parseFloat(num2))}>Subtraction</button> &nbsp;
        <button onClick={() => setResult(parseFloat(num1) * parseFloat(num2))}>Multiplication</button> &nbsp;
        <button onClick={() => setResult(parseFloat(num1) / parseFloat(num2))}>Division</button>
      </div>
    </div>
  );
}
