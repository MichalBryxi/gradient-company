import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="Addict">
        
        <Panel>
          <Character type="computer-man" position="left">
          </Character>
          <Character type="computer-woman" position="right">
          </Character>
        </Panel>
        
        <Panel>
          <Character type="computer-man" position="left">
            So ... what is it with the bag on your head?
          </Character>
          <Character type="computer-woman" position="right">
            I'm in my happy place ...
          </Character>
        </Panel>
        
        <Panel>
          <Character type="computer-man" position="left">
            Is that ... a coffee bean bag?
          </Character>
          <Character type="computer-woman" position="right" sound="Sniffffff!">
          </Character>
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;