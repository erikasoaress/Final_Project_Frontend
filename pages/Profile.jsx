import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../src/context/auth.context";
import "./profile.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function Profile() {
  const { user } = useContext(AuthContext);
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
          `${import.meta.env.VITE_API_URL}/profile/${user._id}`
        );
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
      await axios.put(
        `${import.meta.env.VITE_API_URL}/profile/edit/${user._id}`, body)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <>
      <div className="profileDiv">
        <form onSubmit={handleSubmit} className="profileForm">
          <label htmlFor="title">Change Username</label>
          <input
            type="text"
            onChange={handleName}
            placeholder="                                New Username"
          />

          <label htmlFor="email">Change Email</label>
          <input
            type="text"
            onChange={handleEmail}
            placeholder="                                   New Email"
          />
          <button type="submit" className="editProfileButton">
            Edit Profile
          </button>
        </form>

        <div >
        {profile &&
          profile.favoriteRadios.map((radio) => {
            return <p>{radio.name}</p>;
          })}
      </div>
      </div>
    </>
  );
}
export default Profile;
