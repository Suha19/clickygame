import React from "react";
class ScoresCounter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increases this.state.count by 1
  handleWinning = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleLossing = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score - 1 });
  };


  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default ScoresCounter;