import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth.context'
import "../../App.css";
import "./header.css"



function Header() {
  const { loggedIn, user, logout } = useContext(AuthContext);



  return (
    <header className="header">

      <Link className="radio-title" to="/">
        <h1>RADIO WONDERS</h1>
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Search" className="rounded-input" />
        <button type="submit" className="search-button">
          <img className="magnifyingglass"src="/public/magnifyingglass.png"/>
        </button>
      </div>


      <nav>
        {loggedIn ? (
          <>
            <Link className="navbar-link" to="/explore"> Explore </Link>
            <span className="navbar-link">Hello, {user.name}</span>
            <button className="navbar-link logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="navbar-link" to="/signup"> Signup </Link>
            <Link className="navbar-link" to="/login"> Login </Link>
          </>
        )}
      </nav>

    </header>
  );
}

export default Header;
