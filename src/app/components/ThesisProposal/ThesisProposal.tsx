// src/components/ThesisProposal.js
import React, { useState } from 'react';

const ThesisProposal = ({ onSubmitProposal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmitProposal({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2>Thesis Proposal</h2>
      <div className="container">
        <input
          className="proposal-input"
          type="text"
          placeholder="Enter thesis title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="proposal-input"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="proposal-button" onClick={handleSubmit}>
          Submit Proposal
        </button>
      </div>
    </div>
  );
};

export default ThesisProposal;
