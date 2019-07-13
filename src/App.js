import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json"

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0,
    typeOfGuess: "Click on Image to start",
    clickedID: []

  };

  handleScores = (cards) => {
  
    let shuffledArray = this.shuffle(this.state.cards);
    this.setState({
      cards: shuffledArray
    })
    let clickedid = this.state.clickedID;
    if (clickedid.indexOf(cards.id) === -1 ){
      clickedid.push(cards.id)
      this.setState({
        clickedID: clickedid, 
        typeOfGuess: "You Guessed Correctly", 
        score: this.state.score + 1,
      })
      console.log ("not clicked on")
    }else {
      console.log ("clicked on")
      this.setState({
        typeOfGuess: "You Guessed Incorrectly", 
        score: 0  
      })

    }
  
  };

 shuffle  = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


  render() {
    return (
     
      <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore} typeOfGuess = {this.state.typeOfGuess}>Clicky Game</Header>
        {this.state.cards.map(cards => (
          <Cards
            id={cards.id}
            key={cards.id}
            image={cards.image}
            handleScores = {() => this.handleScores(cards)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
