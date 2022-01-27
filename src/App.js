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
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value });
  }

  onStepsChange(e) {
    this.setState({ steps: e.target.value });
  }

  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid">
        <div class="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepMin}
            max={stepMax}
            onChange={this.onStepsChange}
          />
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
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTemperatureChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
