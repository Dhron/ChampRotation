import React, { Component } from 'react';
import logo from './logo.svg';

//Antd Components
import ChampList from './ChampList';

//Style Sheets
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ChampRotation</h1>
        </header>
        <p className="App-intro">
        </p>
        <ChampList></ChampList>
      </div>
    );
  }
}

export default App;
