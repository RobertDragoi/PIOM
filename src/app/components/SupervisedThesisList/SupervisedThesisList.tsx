// src/components/SupervisedThesisList.js
import React from 'react';
import './SupervisedThesisList.scss';
import { FaCheck, FaTimes } from 'react-icons/fa';

const SupervisedThesisList = ({ theses, role }) => {
  return (
    <div className="container">
      <h2>Supervised Thesis List</h2>
      <div className="list">
        {theses.map((theses, index) => (
          <div key={index} className="extended-card">
            {role === 'Teacher' && (
              <div className="floated-button ">
                <button>
                  <FaCheck />
                </button>
                <button>
                  <FaTimes />
                </button>
              </div>
            )}
            <div className="extended-card-left">{theses.title}</div>
            <div className="extended-card-right">
              <div className="extended-card-right-text">
                {theses.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupervisedThesisList;
