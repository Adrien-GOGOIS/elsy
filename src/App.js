import React from "react";
// COMPONENTS
import Box from "./components/Box.js";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepMin = 0;
const stepMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };

    this.onHeartChange = this.onHeartChange.bind(this);
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          {/* Steps */}
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
