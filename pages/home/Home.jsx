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
      

      {/* <section className="radios-list-section">

        <div className="card-container">

          {
            radios.map((radio) => (
              <div 
                className="card"
                onClick={() => play(radio.name, radio.homepage, radio.favicon)}
              >
                <h2>{radio.name}</h2>
              </div>
            ))
          }

          <div className="card" onClick={() => play("Deutschlandfunk [MP3 128k]", "http://st01.dlf.de/dlf/01/128/mp3/stream.mp3", "http://www.deutschlandfunk.de/static/img/deutschlandfunk/icons/apple-touch-icon-128x128.png")}>
            <h2>Card title</h2>
            <p>Card description</p>
          </div>
          
          <div className="card">

            <h2>Card title</h2>
            <p>Card description</p>
          </div>

          <div className="card">

            <h2>Card title</h2>
            <p>Card description</p>
          </div>

        

          
        </div>

      </section> */}
    </div>
  )
}

export default Home