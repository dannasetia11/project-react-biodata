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
            <h2>Biodata</h2>
            <hr />
            <p>
              Saya adalah seorang Laki yang lahir pada tanggal 25 April 2000.
              Saya dilahirkan di desa yang asri bagian dari kota yang penuh
              dengan pesona di Sukoharjo. Sejak lahir dan tinggal di Sukoharjo,
              saya memulai pendidikan Sekolah Dasar di Sekolah Dasar Negeri
              Telukan 02.
            </p>
            <hr />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
