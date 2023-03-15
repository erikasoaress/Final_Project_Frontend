import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "/src/components/header/Header.jsx";
import Signup from "../pages/access/Signup";
import Login from "../pages/access/Login";
import Explore from "../pages/explore/Explore"
import Home from "../pages/home/Home";
import Profile from "../pages/Profile";
import RadioDetails from "../pages/RadioDetails";
import RadiosCountry from "../pages/RadiosCountry";
import RadiosGenre from "../pages/RadiosGenre";
import RadiosRanked from "../pages/RadiosRanked";
import Player from "./components/player/Player";
import { PlayerContext } from "./context/player.context";
import "./App.css";


function App() {

  const [radios, setRadios] = useState([]);

  const getRadios = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/radio/all-stations`
      );
      console.log(response.data);
      setRadios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRadios();
  }, []);


  const { isPlaying } = useContext(PlayerContext);

  return (
    <div className="app">
      <Header />

      {isPlaying && <Player />}

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route exact path="/explore/popular" element={<RadiosRanked />} />
          <Route path="/explore/:id" element={<RadioDetails />} />
          <Route path="/explore/:genre" element={<RadiosGenre />} />
          <Route path="/explore/:country" element={<RadiosCountry/>} />
          <Route path="/radio/:id" element={<RadioDetails radios={radios}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:_id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
