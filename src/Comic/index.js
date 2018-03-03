import React, { Component } from 'react';

const Comic = function(props) {
  return (
    <section class="comic">
      <h2 className="issue-title">
        {props.title}
      </h2>
      
      <div className="strip">
        {props.children}
      </div>
      
      <div className="signature">
        <a>Gradient company</a> by <a href="https://twitter.com/MichalBryxi" className="subscription">@MichalBryxi</a>
      </div>
    </section>
  );
}

export default Comic;