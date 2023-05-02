import React, { useState } from "react";
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
        className="inputSearch"
        type="text"
        placeholder="Search Name"
        onChange={handleInput}
      />
      {/* <button onClick={() => handleClick(value)}>Search</button> */}
      {filteredData.map((value, index) => (
        <div key={index}>{value.full_Name}</div>
      ))}
    </div>
  );
}
