import React, { Component } from "react";
import logo from "./img/foto.jpg";
import "./App.css";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Donna Setiawan</h3>
          <div className="banner-text">
            <h1>Bold Belserion</h1>
            <h2>Full Stack Web Developer</h2>
            <hr />
            <p>
              Developer Mindset | Dasar pemrograman Komputer |HTML5 | CSS3 |
              JavaScipt | Node.js | Algorithm & Pseudocode | Git | MongoDB |
              React | React Native
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
