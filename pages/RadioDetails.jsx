import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Review from "./review/Review";
import "./radio-details.css";
import { AuthContext } from "../src/context/auth.context";
import { PlayerContext } from "../src/context/player.context";

function RadioDetails() {
  const { play } = useContext(PlayerContext);
  const [radio, setRadio] = useState(null);
  const { radioName } = useParams();
  const [updated, setUpdated] = useState(true);
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  async function getRadio() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/apiRadios/${radioName}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }}
      );
      setRadio(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const addFavorite = async () => {
    try {
      /* const addFavorite2 = await radioService.addFavorite(radio._id); */
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/favorites/${radio._id}/${user._id}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }}
      );
      setUpdated(response.data)
      navigate(`/profile/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    getRadio();
  }, []); */

  useEffect(() => {
    getRadio();
    setUpdated(true);
  }, [updated]);

  return (
    <div className="radio-page">
      {radio && (
        <div className="info-radio-details">
          <h3>{radio.name}</h3>
          <img className="info-radio-image" src={radio.img} />
          <p>{radio.country}</p>

          <button className="favorites-button" onClick={addFavorite}>
            Add to Favorites
          </button>
          <button
            onClick={() =>
              play(
                radio.name,
                radio.url,
                radio.favicon || radio.img || "/radio.jpg"
              )
            }
            className="favorites-button"
          >
            Play
          </button>
        </div>
      )}

      <div className="comments-container">
        <h3 className="comments-container-title">Enjoying this radio? </h3>

        <Review thisRadio={radio} setUpdated={setUpdated} />
        <div className="comments">
          {radio &&
            radio.reviews.map((review) => {
              return (
                <p>
                  <img className="star" src="/star.png"></img>
                  {review.comment}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RadioDetails;
