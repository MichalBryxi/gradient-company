import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="It will be fun they said...">
        
        <Panel title="Random IT office">
          <Character 
            type="computer-man" 
            position="left" 
            say="Bring your child to work days are special."/>
            
          <Character type="computer-woman" position="right" />
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left"
            say="I was not able to do any work for past three hours ..."/>
          <Character type="computer-woman" position="right"/>
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left"
            say="On the other hand I got a free lollipop!"/>
          <Character type="computer-woman" position="right"/>
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;