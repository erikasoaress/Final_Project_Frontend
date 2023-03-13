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
    <div className="ExploreCards">
      <Link to={`/explore/${radios.country}`}>
        {" "}
        Search the radio by country
      </Link>
      <Link to={`/explore/${radios.genre}`}> Choose the genre</Link>
      <Link to={`/explore/${radios.ranking}`}> The top listened radios </Link>
    </div>
  );
}

export default Explore;
