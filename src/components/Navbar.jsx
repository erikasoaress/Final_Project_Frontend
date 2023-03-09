import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const { loggedIn, user, logout } = useState();
  
    return (
      <nav>
        <Link to="/"> Radio </Link>
        {loggedIn ? (
          <>
            <span>Hello {user.name}</span>
            <Link to="/signup">Signup</Link>
            <Link to="/login"> Login </Link>
            <Link to="/explore"> Explore </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup"> Signup </Link>
            <Link to="/login"> Login </Link>
          </>
        )}
      </nav>
    );
  }


export default Navbar;