import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import HeadBag from '../Comic/HeadBag';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="Addiction">
        
        <Panel>
          <Character type="computer-man" position="left" />
          <Character type="computer-woman" position="right">
            <HeadBag />
          </Character>
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="So ... what is the story with the paper thing on your head?" />
          <Character 
            type="computer-woman" 
            position="right" 
            say="I'm in my happy place ...">
            <HeadBag />
          </Character>
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="Wait a minute ... is that a ... coffee bean bag?" />
          <Character 
            type="computer-woman" 
            position="right" 
            sound="Sniffffff!">
            <HeadBag />
          </Character>
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;