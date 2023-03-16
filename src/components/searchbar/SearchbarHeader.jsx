import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RadioCards from "../radio-cards/RadioCards";

function SearchbarHeader() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  const [stations, setStations] = useState([]);
  /*   const { setAllStations } = props; */

  const navigate = useNavigate();

  const searchHeader = async () => {
    try {
      const response = await axios.get(
        `http://de1.api.radio-browser.info/json/stations?limit=5000/search?q=${search}`
      );
      setStations(response.data);
      console.log("a", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* const handleSubmit = (e) => {
    setAllStations(e.target.value);
    navigate("/profile");
  }; */

  useEffect(() => {
    searchHeader();
  }, []);

  return (
    <div className="search-bar">
      <label htmlFor="search"></label>
      <input type="text" placeholder="Search" value={search} onChange={handleSearch} className="rounded-input" />
       <button type="submit" className="search-button">
        <img className="magnifyingglass" src="./public/magnifyingglass.png" />
      </button>
    </div>
  );
}

export default SearchbarHeader;
