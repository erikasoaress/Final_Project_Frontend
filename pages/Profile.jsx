import React, { useContext, useState } from "react";
import { AuthContext } from "../src/context/auth.context";

function Profile() {
  const { user } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");


  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/profile/edit/:id`,
      { name, email }
    );
    console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  };


    return (
      <div>
        <h1>Hello {user.name}</h1>

        <form onSubmit={handleSubmit}>
          <h4>{user.name}</h4>
          <label htmlFor="title">Change Username</label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={handleUsername}
          />
          <h4>{user.email}</h4>
          <label htmlFor="email">Change Email</label>
          <input type="text" name="name" value={email} onChange={handleEmail} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
 
}
export default Profile;
