import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./explore.css";
import SearchBar from "../../src/components/searchbar/SearchBar";
import radioService from "../../src/services/radio.service";

function Explore() {
  const [radios, setRadios] = useState([]);
  const [searchRadios, setSearchRadios] = useState([]);
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");

  const getRadios = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radio/all-stations`
      );
      console.log(response.data);
      setRadios(response.data);
      setSearchRadios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRadios();
  }, []);

  const searchCountry = async () => {
    try {
      const filteredRadios = radios.filter((radio) =>
        radio.country.toLowerCase().startsWith(country.toLowerCase())
      );
      setSearchRadios(filteredRadios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchCountry();
  }, [country]);

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card">
          <h1>Country</h1>
          <SearchBar setCountry={setCountry} />
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <h1>Genre</h1>
        </div>
        {/*  <SearchBar setGenre={setGenre} /> */}
      </div>

      <div className="card-container">
        <div className="card">
          <Link to={`/explore/popular`}>Popular</Link>
        </div>

        {searchRadios.length &&
          searchRadios.map((radio) => {
            return (
              <Link to={`/radio/${radio.stationuuid}`}>
                <h1>{radio.name}</h1>;
              </Link>
            );})}
      </div>
    </div>
  );
}

export default Explore;
