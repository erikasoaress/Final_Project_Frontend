import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "/src/components/Navbar.jsx";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import RadioDetails from "../pages/RadioDetails";
import RadiosCountry from "../pages/RadiosCountry";
import RadiosGenre from "../pages/RadiosGenre";
import RadiosRanked from "../pages/RadiosRanked";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/" element={<Explore />} />
        <Route path="/explore/:id" element={<RadioDetails />} />
        <Route path="/explore/popular" element={<RadiosRanked />} />
        <Route path="/explore/:genre" element={<RadiosGenre />} />
        <Route path="/explore/:country" element={<RadiosCountry />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
