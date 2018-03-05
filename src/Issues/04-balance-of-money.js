import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import HeadBag from '../Comic/HeadBag';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="Balance of money">
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="Oh wow I did not know that this government organisation is our customer." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="And look at the amount of money we're charging them." />
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            emotion="😠"
            say="Wait a minute. That goes from my taxes!" />
          <Character 
            type="computer-woman" 
            position="right" 
            say="But then again, that goes back to your wage, right?" />
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="Oh yeah, then everything is OK..." />
          <Character type="computer-woman" position="right" emotion="😉" />
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;