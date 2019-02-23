import React, { Component } from 'react';

import './App.css';
import Main from './components/main.js';

const mainObj = [
  {id: 1,
    name: "Jacek"},{id:2,name: "Ania"},{id: 3,name: "Jadzia"}]


class App extends Component {



  render() {
    return (
      <div className="App"><Main mainObj={mainObj}/></div>
    );
  }
}

export default App;
