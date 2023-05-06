import React, { useState } from 'react'
import './App.css'

export default function Convertor() {
const [num, setNum] = useState(0)

  return (
    <div>
      <h1>Px to rem convertor</h1>
      <div className='value'>
        <label >Px value</label>
      <input type="number" value={num} onChange={(e)=> setNum(e.target.value)}/>
      </div>
      <div className='value'>
        <label>rem value</label>
        <input type="number" value={num*16} onChange={(e)=> setNum(e.target.value)}/>
      </div>
     
    </div>
  )
}
