import React, { Component } from "react";
import Background from "./img/programing.jpg";
import "./Header.css";
import { url } from "inspector";

const myStyle = {
  backgroundImage: `url(${Background})`,
  height: "80vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={myStyle}>
        <h1>{this.props.title}</h1>
        <p>Bold Balserion</p>
        <a href="#button"></a>
      </header>
    );
  }
}
