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
        `${import.meta.env.VITE_API_URL}/api/radio/all-stations`
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
      <label htmlFor="search">Search:</label>
      <input type="text" value={search} onChange={handleSearch} />

      {/* <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Search Radios"
          className="rounded-input"
        />
        <button type="submit" className="search-button">
          <img className="magnifyingglass" src="/public/magnifyingglass.png" />
        </button>
      </form> */}
    </div>
  );
}

export default SearchbarHeader;
