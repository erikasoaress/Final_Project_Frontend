import "./SearchBar.css";
import React, { useContext } from "react";

function SearchBar(props) {
  const { setCountry } = props;

  const handleSearch = (e) => {
    setCountry(e.target.value);
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
        <img
          className="magnifyingglass"
          src="https://res.cloudinary.com/dh7m8kaap/image/upload/v1678965219/magnifyingglass_a3hvta.png"
        />
      </button>
    </div>
  );
}

export default SearchBar;
