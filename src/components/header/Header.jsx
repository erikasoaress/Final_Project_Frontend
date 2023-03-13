import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context/auth.context'
import "../../App.css";
import "./header.css"
import "../../styles/sass.scss"


function Header() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  

  return (


    <nav className="header">
      <div class="search-bar">
        <input type="text" placeholder="Search"/>
          <button class="search-button">Search</button>
      </div>

      <Link className="navbar-link" to="/"> Home </Link>


      {loggedIn ? (
        <>
          <span className="navbar-link">Hello {user.name}</span>

          <Link className="navbar-link" to="/explore"> Explore </Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link className="navbar-link" to="/signup"> Signup </Link>
          <Link className="navbar-link" to="/login"> Login </Link>


          <h1 className="radio-title">RADIO WONDERS</h1>


        </>
      )}


    </nav>
  );
}

export default Header;
