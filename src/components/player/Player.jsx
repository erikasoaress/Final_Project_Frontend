import React, { useContext } from "react";
import { PlayerContext } from "../../context/player.context";

import "../../App.css";
import "./player.css"

function Player() {
  const { radio } = useContext(PlayerContext)

  return (
    <div className="player">
        <div 
          className="player-radio-image"
          style={
            {
              backgroundImage: `url(${radio.favicon})`
            }
          }
        />
        <div className="player-radio-content">
            <h5 className="player-radio-title">{radio.name}</h5>
        </div>

        <div className="player-radio-controls">
          <audio controls autoPlay>
              <source src={radio.url} type="audio/mpeg"/>
              Your browser does not support the audio element.
          </audio>
        </div>
    </div>
  );
}

export default Player;
