import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth.context'
import "../../App.css";
import "./header.css"
import "../../styles/stylesheet.css";
import SearchBar from "../searchbar/SearchBar";




function Header() {
  const { loggedIn, user, logout } = useContext(AuthContext);



  return (
    <header className="header">
      <Link className="radio-title" to="/">
        <h1>RADIO WONDERS</h1>
      </Link>

      <SearchBar />

      <nav>
        {loggedIn ? (
          <>
            <Link className="navbar-link" to="/explore">
              {" "}
              Explore{" "}
            </Link>
            <Link className="navbar-link" to={`/profile/${user._id}`}>
              Hello, {user.name}
            </Link>
            <button className="navbar-link logout" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="navbar-link" to="/signup">
              {" "}
              Signup{" "}
            </Link>
            <Link className="navbar-link" to="/login">
              {" "}
              Login{" "}
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;



