import React, { Component } from 'react';

const Character = function(props) {
  let faceClassName = `character-${props.position}`;
  let bubbleClassName = `bubble bubble-${props.position}`;
  let types = {
    'computer-man': '👨‍💻',
    'computer-woman': '👩‍💻'
  }
  let face = types[props.type];
  return (
    <React.Fragment>
      {props.children &&
        <p className={bubbleClassName}>
          {props.children}
        </p>
      }
      <div className={faceClassName}>
        <span className="character">
          {face}
        </span>
      </div>
    </React.Fragment>
  );
}

Character.defaultProps = {
  position: 'left',
  type: 'computer-woman'
}

export default Character;