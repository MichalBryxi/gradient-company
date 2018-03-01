import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';
import Issue03 from './Issues/03-effectivity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Gradient company</h1>
        <h2>Released issues</h2>
          <Issue01 />
          <Issue02 />
        <h2>Drafts</h2>
          <Issue03 />
        <footer>
          <p>Hosted on <a href="https://github.com/MichalBryxi/gradient-company">GitHub</a></p>
          <p>Published on <a href="http://www.webtoons.com/en/challenge/gradient-company/list?title_no=155642">WebToon</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
