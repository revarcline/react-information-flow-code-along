import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRandomColor } from "./randomColorGenerator.js";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default Child;

Child.propTypes = {
  handleColorChange: PropTypes.func,
  color: PropTypes.string,
};
