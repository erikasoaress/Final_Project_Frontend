
import React from "react";
import "./radio-cards.css"


function RadioCards({radio}) {




            return (

                <div className="card-container">
                    <div className="card">

                        <img src={`${radio.favicon}`} alt="radio symbol" style={{ width: "250px" }} />
                        <h3>{radio.name}</h3>
                        <p>{radio.country}</p>

                    </div>
                </div>


            )
   


}

export default RadioCards;



