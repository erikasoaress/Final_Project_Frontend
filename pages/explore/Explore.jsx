import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./explore.css";
import SearchBar from "../../src/components/searchbar/SearchBar";
import SearchBarGenre from "../../src/components/searchbar/SearchBarGenre";
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


  const searchGenre = async () => {
    try {
      const filteredRadios = radios.filter((radio) =>
        radio.genre.toLowerCase().startsWith(genre.toLowerCase())
      );
      setSearchRadios(filteredRadios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchGenre();
  }, [genre]);

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
          {<SearchBarGenre setGenre={setGenre} />}
        </div>
        
      </div>

      <div className="card-container">
        <div className="card">
          <h1>Popular</h1>
          <Link to={`/explore/popular`}>Check here</Link>
        </div>

        {searchRadios.length &&
          searchRadios.map((radio) => {
            return (
<<<<<<< HEAD
              <Link to={`/radio/${radio._id}`}>
                <h1>{radio.name}</h1>;
              </Link>
            );
          })}
=======
             <Link to={`/radio/${radio._id}`}>
               <h1>{radio.name}</h1>
             </Link>
          )})}
>>>>>>> bc4d981be0c98dc9241f8e3a3f5ee274772f834c
      </div>
    </div>
  );
}

export default Explore;
