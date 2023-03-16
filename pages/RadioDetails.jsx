import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Review from "./review/Review";
import "./radio-details.css";
import { AuthContext } from "../src/context/auth.context";

function RadioDetails() {
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
      /* console.log(response.data); */
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
      /* console.log(radio._id);
      console.log(response); */
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
    <div>
      <img className="door-radio-details" src="/door-radio-details.png" />
      <div className="info-radio-details">
        {radio && (
          <>
            <h3>{radio.name}</h3>
            <img src={radio.img} />
            <p>{radio.country}</p>
            <Review thisRadio={radio} setUpdated={setUpdated} />
            <button className="favorites-button" onClick={addFavorite}>
              Add to Favorites
            </button>
          </>
        )}
      </div>

      <div className="comments-container">
        <div className="comments">
          {radio &&
            radio.reviews.map((review) => {
              return (
                <p>
                  <img
                    className="star"
                    src="/star.png"
                  ></img>
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
