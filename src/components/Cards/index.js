import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" >
      <button className="img-container"  >
        <img alt="clickme"  src={props.image}  onClick={props.handleScores}/>
      </button>
    </div>
  );
}

export default Card;