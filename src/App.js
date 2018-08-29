import React, { Component } from 'react';
import logo from './assets/tulum.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Tulum</h1> */}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


// dark
// #2C3531 BLACKISH
// #116466 GREEN
// #D9B08C DARK PEACH
// #FFCB9A PEACH
// #D1E8E2 WHITISH GRAY
