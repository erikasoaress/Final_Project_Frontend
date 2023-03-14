
import React ,{useContext} from "react";
import "./radio-cards.css"
import { PlayerContext } from "../../context/player.context";
import {Link} from "react-router-dom"


function RadioCards({radio}) {
    const { play } = useContext(PlayerContext);



            return (

                <div className="card-container">
                    <div className="card" onClick={() => play(radio.name, radio.url, radio.favicon)}>
                    <img src={`${radio.favicon}`} onError={(e) => e.target.src = '/radio.jpg'} alt="radio symbol" style={{ width: "250px" }} />
                        {/* <img src={`${radio.favicon}`} alt="radio symbol" style={{ width: "150px" }} /> */}
                        <h3>{radio.name}</h3>
                        <p>{radio.country}</p>
                        <Link to={radio.homepage}> Radio website </Link>

                    </div>
                </div>


            )
   


}

export default RadioCards;



