import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context/auth.context'
import "../../App.css";
import "./header.css"


function Header() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="header">
      <div className="header">
      <h1 className="radio-title">RADIO WONDERS</h1>
      
      </div>
      <Link className="navbar-link" to="/"> Home </Link>
      {loggedIn ? (
        <>
           {/* <span>Hello {user.name}</span> */}
          <Link className="navbar-link"  to="/explore"> Explore </Link>
          <button onClick={logout}>Logout</button> 
         ´
        </>
      ) : (
        <>
           <Link className="navbar-link"  to="/signup"> Signup </Link>
          <Link className="navbar-link"  to="/login"> Login </Link> 
         
        </>
      )}
    </nav>
  );
}

export default Header;
