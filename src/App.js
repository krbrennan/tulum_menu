import React, { Component } from 'react';
import logo from './assets/tulum_logo.svg';
import './App.css';

import Burritos from './burritos/BurritoMenu';
import Tacos from './tacos/Tacos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Tulum</h1> */}
        </header>
        <hr />
        <h1 className='menu-title'>Menu</h1>
        <Burritos />
        <Tacos />
        {/* <div className='menu'>
          <h1 className='menu-title'>Menu</h1>
          <div className='burritos'>

          </div>


          <div className='tacos'>


          </div>

          <div className='creations'>


          </div>

        </div> */}
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
