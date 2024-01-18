import React from 'react';
import './ProposedTopics.scss';
const ProposedTopics = ({ proposedTopics }) => {
  return (
    <div className="container">
      <h2>Proposed topics by teacher </h2>
      <div className="list">
        {proposedTopics.map((topic, index) => (
          <div key={index} className="card">
            <div className="card-left">{topic.title}</div>
            <div className="card-right">{topic.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProposedTopics;
