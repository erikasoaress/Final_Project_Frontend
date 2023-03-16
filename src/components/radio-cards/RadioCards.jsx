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

          <Link className="link-radio-detail"to={`/radio/${radio.name}`}> See more</Link>
          <p>
            {!radio.country || radio.country === ""
              ? "Unknown country"
              : radio.country}
          </p>
        </div>

        <button
          onClick={() =>
            play(
              radio.name,
              radio.url,
              radio.favicon || radio.img || "/radio.jpg"
            )
          }
          className="card-button"
        >
          Play radio
        </button>
      </div>
    );

}

export default RadioCards;
