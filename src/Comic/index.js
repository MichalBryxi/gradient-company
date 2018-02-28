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
      
      <div class="signature">
        <a>Gradient company</a> by <a href="https://twitter.com/MichalBryxi" class="subscription">@MichalBryxi</a>
      </div>
    </section>
  );
}

export default Comic;