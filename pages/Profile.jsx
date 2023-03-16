import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../src/context/auth.context";
import "./profile.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const { user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null)
  const { _id } = useParams();
/*   console.log(profile)
  console.log(user) */
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const getUser = async () => {
    try {
      if (user) {
        let response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/profile/${user._id}`
        )
        console.log(response.data)
        setProfile(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, email };

    try {
     const updatedUser = await axios
        .put(
          `${import.meta.env.VITE_API_URL}/api/profile/edit/${user._id}`,
          body)
          console.log(updatedUser)

        //  localStorage.setItem("authToken", updatedUser.data.authToken)
          authenticateUser()

          console.log(updatedUser)
/*       navigate("/")
 */
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getUser();
  }, [user]);
  

  return (
    <>
      <div className="big-container">
        <div className="profile-div">
          <img className="user-picture" src="/userpicture.png" />

          <form onSubmit={handleSubmit} className="profile-form">
            <label htmlFor="title">Username:</label>
            <input
              className="profile-input"
              type="text"
              onChange={handleName}
              value={name}
              placeholder="New Username"
            />

            <label htmlFor="email">Email:</label>
            <input
              className="profile-input"
              type="text"
              onChange={handleEmail}
              value={email}
              placeholder="New Email"
            />
            <button type="submit" className="edit-profile-button">
              Edit Profile
            </button>
          </form>
        </div>

        <div className="favorite-radios">
          <h1>My Favorite Stations</h1>
          {profile &&
            profile.favoriteRadios.map((radio) => {
              return (
                <div>
                  <Link to={`/radio/${radio.name}`}>
                    <h3>{radio.name}</h3>
                    <h4>{radio.country}</h4>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Profile;
