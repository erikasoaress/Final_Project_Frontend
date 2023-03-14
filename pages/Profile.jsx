import React, { useContext } from "react";
import { AuthContext } from "../src/context/auth.context";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Hello {user.name}</h1>
      

      
    

    </div>
  );
}

export default Profile;
