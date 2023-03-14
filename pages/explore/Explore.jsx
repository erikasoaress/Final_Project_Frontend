import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./explore.css";
import SearchBar from "../../src/components/searchbar/SearchBar";


function Explore() {
  const [radios, setRadios] = useState([]);

  const getRadios = async () => {
    try {
      const response = await radioService.GetRadios();
      console.log(response.data);
      setRadios(response.data);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      getRadios;
    }, []);
  };
  return (


    <div className="card-wrapper">
      <div className="card-container">
        <div className="card">
          <h1>Country</h1>
        <SearchBar/>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <h1>Genre</h1>
        </div>
        <SearchBar/>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to={`/explore/popular`}>Popular</Link>
        </div>
       
       



      </div>
    </div>
  );
}

export default Explore;
