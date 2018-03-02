import React, { Component } from 'react';

const Title = function(props) {
  return (
    <div className="strip-title">
      <p className="evenboxinner">
        {props.children}
      </p>
    </div>
  );
}

export default Title;