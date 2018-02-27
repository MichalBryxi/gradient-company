import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import HeadBag from '../Comic/HeadBag';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="Addict">
        
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
            say="So ... what is it with the bag on your head?" />
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
            say="Is that ... a coffee bean bag?" />
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