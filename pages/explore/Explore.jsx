import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




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
    <div>
      <div className="card-container">
        <div className="card">
          <Link to={`/explore/${radios.country}`}>Country</Link>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <Link to={`/explore/${radios.genre}`}>Genre</Link>
        </div>
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