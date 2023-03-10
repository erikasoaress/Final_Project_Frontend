import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function RadioDetails(){
    const [radio, setRadio] = useState(null)

    const {radioId} = useParams()

   /*   const foundRadio = .find((radio) => {
       return radio._id === radioId;
     }); */

   return (
    <div>
      <h2>Radio</h2>
 {/*      {foundRadio && (
        <>
          <h3>{foundRadio.name}</h3>
          <img src={foundRadio.img} alt="Picture of Radio Station" />
        </>
      )}
 */}
      <Link to="/explore">Explore</Link>
    </div>
  );
}

export default RadioDetails