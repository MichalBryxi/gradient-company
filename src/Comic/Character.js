import React, { Component } from 'react';

const Character = function(props) {
  return (
    <React.Fragment>
      <p className="bubble left-bubble">
        {props.children}
      </p>
      <div className="character-a">
        <span className="character">
          👨‍💻
        </span>
      </div>
    </React.Fragment>
  );
}

export default Character;