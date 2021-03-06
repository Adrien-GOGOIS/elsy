import React from "react";

// Box avec indications et renvois des infos au parent App.js
class Box extends React.Component {
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
        {this.props.icon === "local_drink" ? null : (
          <input
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        )}
      </div>
    );
  }
}

export default Box;
