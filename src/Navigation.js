import React, { Component } from "react";
import "./Navigation.css";
import github from "./img/github.png";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h6 className="logo">
          <a href="https://github.com/dannasetia11/">
            <img src={github} className="github" alt="github" />
          </a>
        </h6>

        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Profile">Profile</a>
          </li>
          <li>
            <a href="#Contect">Contect</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
