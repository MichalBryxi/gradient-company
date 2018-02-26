import React, { Component } from 'react';

const Title = function(props) {
  return (
    <p className="evenboxinner">
      {props.children}
    </p>
  );
}

export default Title;