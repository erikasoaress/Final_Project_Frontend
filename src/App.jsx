import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {Routes, Route} from "react-router-dom";
import Header from "/src/components/header/Header.jsx";
import Signup from "../pages/access/Signup";
import Login from "../pages/access/Login";
import Explore from "../pages/Explore";
import Home from "../pages/home/Home";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import RadioDetails from "../pages/RadioDetails";
import RadiosCountry from "../pages/RadiosCountry";
import RadiosGenre from "../pages/RadiosGenre";
import RadiosRanked from "../pages/RadiosRanked";

import "./styles/colors.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/" element={<Explore />} />
          <Route path="/explore/:id" element={<RadioDetails />} />
          <Route path="/radios/ranked" element={<RadiosRanked />} />
          <Route path="/explore/:genre" element={<RadiosGenre />} />
          <Route path="/explore/:country" element={<RadiosCountry />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/edit/:id" element={<EditProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
