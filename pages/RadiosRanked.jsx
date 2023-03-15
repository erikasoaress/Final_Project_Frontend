import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import RadioCards from "../src/components/radio-cards/RadioCards";


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

    <> 
        {radiosRanked.length && radiosRanked.map((radio) => {
      return(<RadioCards radio={radio}/>)})
    }
</>

  )
}

export default RadiosRanked;

        //   <div className="radio-wrapper">
        //   <h3>{radio.country}</h3>
        //   <h3>{radio.country}</h3>
        //   <img src={`${radio.favicon}`} alt="radio symbol" style={{width: "250px"}}/>
        // </div>