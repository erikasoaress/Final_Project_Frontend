import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RadioDetails() {
  const [radio, setRadio] = useState(null);
  const { id } = useParams();

  async function getRadio() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radios/${id}`
      );
      setRadio(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRadio();
  }, []);

  return (
    <div>
      <h1>Radio</h1>
      <h3>{radio && radio.name}</h3>
    </div>
  );
}

export default RadioDetails;
