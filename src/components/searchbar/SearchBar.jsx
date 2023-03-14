
import "./SearchBar.css"
import React, { useContext } from "react";


function SearchBar() {


  return (
    <div className="search-bar">
    <input type="text" placeholder="Search" className="rounded-input" />
    <button type="submit" className="search-button">
      <img className="magnifyingglass"src="/public/magnifyingglass.png"/>
    </button>
  </div>
)}

export default SearchBar;
