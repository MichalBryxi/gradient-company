import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import HeadBag from '../Comic/HeadBag';

class Issue extends Component {
  render(props) {
    return (
      <Comic title="Effectivity">
        
        <Panel>
          <Character type="computer-man" position="left" 
            say="Performance meetings helps us figure out what's holding our company back." />
          <Character type="computer-woman" position="right">
          </Character>
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="We found a lot of useless things we're doing, so we took action..." />
          <Character type="computer-woman" position="right" emotion="☺️" />
        </Panel>
        
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="We started by cancelling performance meetings." />
          <Character type="computer-woman" position="right" emotion="😠" />
        </Panel>
        
      </Comic>
    );
  }
}

export default Issue;