import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button className="block" onClick={this.handleClick}>
        <div className="counter">{this.state.count}</div>
      </button>
    );
  }
}

// Now you can use it dynamically like this:
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>4 counters</div>
        {[1, 2, 3, 4].map((v) => (
          <Counter />
        ))}
      </div>
    );
  }
}
export default App;
