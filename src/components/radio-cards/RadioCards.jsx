import React ,{useContext} from "react";
import { PlayerContext } from "../../context/player.context";
import {Link} from "react-router-dom"
import "./radio-cards.css"


function RadioCards({radio}) {
    const { play } = useContext(PlayerContext);

    return (
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${
              radio.favicon || radio.img || "/radio.jpg"
            })`,
          }}
        />

        <div className="card-content">
          <h3>
            {!radio.name || radio.name === "" ? "Unknown name" : radio.name}
          </h3>

          <p>
            {!radio.country || radio.country === ""
              ? "Unknown country"
              : radio.country}
          </p>
        </div>

        <div className="card-actions">
          <Link
            className="card-button"
            to={`/radio/${radio.name}`}
          >
            See more
          </Link>

          <button
            onClick={() =>
              play(
                radio.name,
                radio.url,
                radio.favicon || radio.img || "/radio.jpg"
              )
            }
            className="card-button play-button"
          >
            Play radio
          </button>
        </div>
      </div>
    );

}

export default RadioCards;
