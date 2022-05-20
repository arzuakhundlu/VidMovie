import React from "react";
import "./SearchBox.css";

export default function SearchBox({onInputChange, inputVal}) {
  return (
    <div className="search-box">
      <form className="search-box__form" >
          <input 
          type="text" 
          placeholder="Search..." 
          className="search-box__form-input"
          onChange={onInputChange}
          />
        <button type="submit" className="search-box__form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
