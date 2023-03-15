import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import radioService from '../../src/services/radio.service';
import { PlayerContext } from '../../src/context/player.context';
import { Link } from 'react-router-dom';

import "./Home.css"

function Home() {
  const { play } = useContext(PlayerContext);

  const [radios, setRadios] = useState([])

  const getRadios = async () => {
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
    <div className="home-page">

      <section className="hero-banner-section">

        <div className="musicbox circle" />
        
      </section>
      

    
    </div>
  )
}

export default Home