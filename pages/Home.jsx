import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../src/components/Navbar'
import radioService from '../src/services/radio.service';
import { Link } from 'react-router-dom';



function Home() {

/*   const [radios, setRadios] = useState([])

  const getRadios = async() => {
    try {
      const response = await radioService.GetRadios()
      console.log(response.data)
      setRadios(response.data);
    } catch (error) {
      console.log(error)
    }

      useEffect(() => {
        getRadios
      }, [])
  }


  return (
    <div>
      <h1>Home</h1>
    {radios.map((radio) => {
      return (
        <>
        <h3>Hello</h3>
        
        </>
      )
    })}
    </div>
  ); */
}

export default Home