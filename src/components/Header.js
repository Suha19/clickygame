import React from "react";

function header() {
  return (
    <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className="guessType">You guessed correctly!</li>
            <li>Score: 1 | Top Score: 1</li>
        </ul>
    </nav>
  );
}

export default header;