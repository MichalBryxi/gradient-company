import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="It will be fun they said...">
        
        <Panel title="Random IT office">
          <Character type="computer-man" position="left">
            Bring your child to work days are special.
          </Character>
          <Character type="computer-woman" position="right">
          </Character>
        </Panel>
        
        <Panel>
          <Character type="computer-man" position="left">
            I was not able to do any work for past three hours ...
          </Character>
          <Character type="computer-woman" position="right">
          </Character>
        </Panel>
        
        <Panel>
          <Character type="computer-man" position="left">
            On the other hand I got a free lollipop!
          </Character>
          <Character type="computer-woman" position="right">
          </Character>
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;