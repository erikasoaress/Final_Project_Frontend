import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function RadiosRanked() {
  const [radiosRanked, setRadiosRanked] = useState([]);

  const getRankedRadios = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radios/ranked`
      );
      setRadiosRanked(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRankedRadios();
    console.log("a");
  }, []);

  useEffect(() => {
    console.log("hi", radiosRanked);
  }, [radiosRanked]);

  return (
    <div>

      {radiosRanked.map((radio) => {
        return(
          <div className="radio-wrapper">
          <h3>{radio.country}</h3>
          <h1>{radio.name}</h1>
          <img src={`${radio.favicon}`} alt="radio symbol" style={{width: "250px"}}/>
        </div>
          )
      })}
    </div>
  );
}

export default RadiosRanked;
