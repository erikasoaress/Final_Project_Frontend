import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function RadiosByCountry() {
  const [radiosByCountry, setRadiosByCountry] = useState([]);
    const { countryId } = useParams();


  const getRadiosByCountry = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radios/country/${countryId}`
      );
      setRadiosByCountry(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRadiosByCountry();
    console.log("a");
  }, []);

  useEffect(() => {
    console.log(radiosByCountry);
  }, [radiosByCountry]);

  return (
    <div>
      {radiosByCountry.map((radio) => {
        return (
          <div className="radio-wrapper">
            <h3>{radio.country}</h3>
            <h1>{radio.name}</h1>
            <img
              src={`${radio.favicon}`}
              alt="radio symbol"
              style={{ width: "250px" }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RadiosByCountry;
