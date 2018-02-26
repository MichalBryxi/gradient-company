import React, { Component } from 'react';
import Title from './Title';

const Panel = function(props) {
  return (
    <div className="box">
      {props.title && 
        <Title>{props.title}</Title>
      }
      {props.children}
    </div>
  );
}

export default Panel;