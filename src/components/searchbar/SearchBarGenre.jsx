import "./SearchBar.css";
import React, { useContext } from "react";

function SearchBarGenre(props) {
  const { setGenre } = props;

  const handleSearch = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="rounded-input"
        onChange={handleSearch}
      />
      <button type="submit" className="search-button">
        <img className="magnifyingglass" src="../../../public/magnifyingglass.png"/>
      </button>
    </div>
  )
}

export default SearchBarGenre;