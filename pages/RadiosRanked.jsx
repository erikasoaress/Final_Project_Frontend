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
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRankedRadios();
  }, []);

   radiosRanked.map((radio) => {
    return (
    <div key={radio._id}>
      <p>{radio.country}</p>
    </div>)
});
}

export default RadiosRanked;
