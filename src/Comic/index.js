import React, { Component } from 'react';

const Comic = function(props) {
  return (
    <section className="comic-2">
      <h2 className="issue-title">
        {props.title}
      </h2>
      
      <div className="strip">
        {props.children}
      </div>
    </section>
  );
}

export default Comic;