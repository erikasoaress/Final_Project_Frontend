import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function RadiosByGenre() {
  const [radiosByGenre, setRadiosByGenre] = useState([]);
  const { genreId } = useParams();


  const getRadiosByGenre = async () => {

    try {
        const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radios/genre/${genreId}`
      );
      setRadiosByGenre(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRadiosByGenre();
    console.log("a");
  }, []);

  useEffect(() => {
    console.log(radiosByGenre);
  }, [radiosByGenre]);

  return (
    <div>
      {radiosByGenre.map((radio) => {
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

export default RadiosByGenre;
