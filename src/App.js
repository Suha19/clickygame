import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json"

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  handleScores = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score)
  };
 
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
      <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(cards => (
          <Cards
            imageClick={this.imageClick}
            id={cards.id}
            key={cards.id}
            image={cards.image}
           handleScores = {this.handleScores}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
