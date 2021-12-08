import React, { useState, useEffect } from "react";

function SearchBar(props) {

    const [inputText, setInput] = useState("");





    const handleChange = (e) => {
          let { value } = e.currentTarget;
          setInput(value);
     };

     useEffect(() => {
        props.searchActivity(inputText);
 
     }, [inputText]);


  return (
    <div className="searchbox-container">
      <h4>Search</h4>
      <input
        onChange={handleChange}
        value={inputText}
        type="text"
        name="productInput"
      ></input>
    </div>
  );
}

export default SearchBar;