import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Issue01 />
        <Issue02 />
      </div>
    );
  }
}

export default App;
