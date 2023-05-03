import React, { useState } from "react";
import './App.css'
import data from "./MOCK_DATA (3).json";

export default function Dropdown() {
  const [value, setValue] = useState("");
  

  function handleInput(e) {
    setValue(e.target.value);
  }

  const filteredData = data.filter((item) => {
    const searchName = value.toLowerCase();
    const fullName = item.full_Name.toLowerCase();
    return searchName && fullName.startsWith(searchName);
  });

  return (
    <div>
      <h1>Search Your Name</h1>
      <input
      value={value}
        className="inputSearch"
        type="text"
        placeholder="Search Name"
        onChange={handleInput}
      />
      <div className="dropdown">
      {filteredData.map((value, index) => (
        <div key={index} className="dropList" >{value.full_Name}</div>
      ))}
      </div>
    </div>
  );
}
