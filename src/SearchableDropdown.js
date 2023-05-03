import React from 'react';
import './App.css'
import data from './MOCK_DATA (3).json'

export default function SearchableDropdown() {

  return (
    <div>
      <h1>Searcable Dropdwon</h1>
      <input list="data" className="inputSearch"/>
      <datalist id='data'>
        {
              data.map((item) => <option>{item.full_Name}</option> )
        }
      </datalist>
    </div>
  )
}
