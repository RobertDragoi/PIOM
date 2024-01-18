// src/components/Teacher.js
import React, { useState } from 'react';

import './TeacherProposal.scss';
const TeacherProposal = ({ onProposeTopic }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleProposeTopic = () => {
    onProposeTopic({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="container">
      <h2>Teacher proposals</h2>
      <div className="container">
        <input
          className="proposal-input"
          type="text"
          placeholder="Tite"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="proposal-input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="proposal-button" onClick={handleProposeTopic}>
          Propose Topic
        </button>
      </div>
    </div>
  );
};

export default TeacherProposal;
