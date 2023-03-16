import React, { useContext } from "react";
import "./favorite-radios.css"


function FavoriteRadios({ radio }) {
  return (
    <div className="favorites-collection">
      <h1>{radio.name}</h1>
      
    </div>
  );
}

export default FavoriteRadios;