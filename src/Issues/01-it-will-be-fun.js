import React, { Component } from 'react';
import Layout from '../Comic/Layout';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';

class Issue extends Component {
  render(props) {
    return (
      <Layout title="It will be fun they said...">
        <Panel title="Random IT office">
          <Character type="computer-man">
            Bring your child to work days are special.
          </Character>
        </Panel>
      </Layout>
    );
  }
}

export default Issue;