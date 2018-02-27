import React, { Component } from 'react';

const Character = function(props) {
  let faceClassName = `character-${props.position}`;
  let bubbleClassName = `bubble bubble-${props.position}`;
  let soundClassName = `sound sound-${props.position}`;
  let types = {
    'computer-man': '👨‍💻',
    'computer-woman': '👩‍💻'
  }
  let face = types[props.type];
  return (
    <React.Fragment>
      {props.say &&
        <p className={bubbleClassName}>
          {props.say}
        </p>
      }
      <div className={faceClassName}>
        {props.sound &&
          <p className={soundClassName}>
            {props.sound}
          </p>
        }
        <span className="character">
          {props.children}
          <span className="face">
            {face}
          </span>
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