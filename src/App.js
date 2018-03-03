import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Grid } from 'semantic-ui-react'

import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';
import Issue03 from './Issues/03-effectivity';

import HomepageLayout from './Layout/Homepage';

class App extends Component {
  state = { comicSize: 3 }
  
  handleInputChange = (e, { value }) => {
    this.setState({ comicSize: value });
  }
  
  render() {
    let comicClass = `comic-${this.state.comicSize}`;
    
    return (
      <div className="App">
        <HomepageLayout>
          <h1>Gradient company</h1>
          <Grid container>
            <Grid.Row textAlign='center'>
              <Grid.Column>
                <label>
                  Zoom:
                </label>
                <Input min={1} max={3} onChange={this.handleInputChange} type='range' value={this.state.comicSize} />
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row className={comicClass} textAlign='center'>
              <Grid.Column>
                <h2>Released issues</h2>
                  <Issue01 />
                  <Issue02 />
                  <Issue03 />
                <h2>Drafts</h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            <p>Hosted on <a href="https://github.com/MichalBryxi/gradient-company">GitHub</a></p>
            <p>Published on <a href="http://www.webtoons.com/en/challenge/gradient-company/list?title_no=155642">WebToon</a></p>
          </footer>
        </HomepageLayout>
      </div>
    );
  }
}

export default App;
