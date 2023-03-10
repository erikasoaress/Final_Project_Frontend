import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../src/components/Navbar';
import { Link } from 'react-router-dom';
import RadiosCountry from './RadiosCountry';
import RadiosGenre from './RadiosGenre';
import RadiosRanked from './RadiosRanked';

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


function Explore() {
  return (
    <>
      <Link to={`/explore/${radios.country}`}> Search the radio by country</Link>
      <Link to={`/explore/${radios.genre}`}> Choose the genre</Link>
      <Link to={`/explore/${radios.ranking}`}> The top listened radios </Link>
    </>
  );
}

export default Explore