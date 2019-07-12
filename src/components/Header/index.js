import React from "react";
import "./style.css";


const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div  style = {{ 
      color:props.rightGuess? "green": "red"
    } } 
    className= "typeOfGuess">{ props.typeOfGuess}</div>
    <div className="scores">
      Score : {props.score} Highscore : {props.highscore}
    </div>
  </div>
);

export default Header;