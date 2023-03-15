import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import SearchBar from "../../src/components/searchbar/SearchBar";
import SearchBarGenre from "../../src/components/searchbar/SearchBarGenre";
import radioService from "../../src/services/radio.service";
import RadioCards from "../../src/components/radio-cards/RadioCards";
import "./explore.css";

const AVAILABLE_GENRES = [
  {
    name: "Pop",
    value: "pop",
    theme: "red",
  },
  {
    name: "Rock",
    value: "rock",
    theme: "black",
  },
  {
    name: "Jazz",
    value: "jazz,blues,experimental jazz",
    theme: "purple",
  },
  {
    name: "Reggae",
    value: "reggae",
    theme: "green",
  },
  {
    name: "Classic",
    value: "classical music",
    theme: "yellow",
  },
  {
    name: "Indie Rock",
    value: "indie rock",
    theme: "blue",
  },
];

function Explore() {
  const [radios, setRadios] = useState([]);
  const [searchRadios, setSearchRadios] = useState([]);
  // const [genre, setGenre] = useState("");
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


  const searchGenre = async (genre) => {
    try {
      const filteredRadios = radios.filter((radio) =>
        radio.tags.toLowerCase().split(",").includes(genre)
      );
      setSearchRadios(filteredRadios);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="explore-page">

      <section className="explore-categories">

        <div className="explore-category">
          <div className="explore-category-info">
            <h1>Country</h1>
            <SearchBar setCountry={setCountry} />
          </div>
        </div>

        <div className="explore-category">
          <div className="explore-category-info">
            <h1>Genre</h1>
          </div>

          <div className="genre-list">
            {
              AVAILABLE_GENRES.map((genreItem) => (
                <div 
                  className={`genre ${genreItem.theme}-genre`}
                  onClick={() => searchGenre(genreItem.value)}
                >
                  {genreItem.name}
                </div>
              ))
            }
          </div>
        </div>

        <div className="explore-category">
          <div className="explore-category-info">
            <h1>Popular</h1>
            <Link to={`/explore/popular`}>Check here</Link>
          </div>
        </div>

      </section>

      <section className="explore-radios">

        <div className="radios-cards">
          {searchRadios.length &&
            searchRadios.map((radio) => {
              return (
                <div className="radio-card-wrapper">
                  <RadioCards radio={radio}/>
                </div>
              );
            }
          )}  
        </div>

  </section>
      </div>
  );
}

export default Explore;

