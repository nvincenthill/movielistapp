import "./main.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nick"
    };
  }

  render() {
    return <h1>Fuck you, {this.state.name}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
