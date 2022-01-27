import React from "react";

class Box extends React.Component {
  displayRange() {
    if (this.props.icon !== "local_drink") {
      <input
        type={"range"}
        min={this.props.min}
        max={this.props.max}
        value={this.props.value}
        onInput={this.props.input}
      />;
    }
  }

  render() {
    const css = {
      fontSize: "100px",
      color: this.props.color,
    };
    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={css}>
          {this.props.icon}
        </span>
        <p>
          {this.props.value} {this.props.unit}
        </p>
      </div>
    );
  }
}

export default Box;
