import React, { useState, useEffect } from "react";
import axios from 'axios';
import radioService from '../../src/services/radio.service';
import { Link } from 'react-router-dom';

import "./Home.css"

function Home() {

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
    <>
      <div className="home-page">

        <div className="hero-banner">

          <div className="musicbox circle" />
          
        </div>
      </div>

      <section>
        <div className="card-container">
          <div className="card">

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

          <div className="card">

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

      </section>
    </>

  )
}




export default Home