// eslint-disable-next-line @typescript-eslint/no-unused-vars
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { UserProvider } from './UserContext';
import './app.module.scss';
import Proposals from './pages/Proposals';
import ThesisList from './pages/ThesisList';

const App = () => {
  const [proposedTopics, setProposedTopics] = useState([]);
  const [supervisedTheses, setSupervisedTheses] = useState([]);

  const handleProposeTopic = (topic) => {
    setProposedTopics([...proposedTopics, topic]);
  };

  const handleSubmitProposal = (title) => {
    setSupervisedTheses([...supervisedTheses, title]);
  };

  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route
            path="/proposals"
            element={
              <Proposals
                handleProposeTopic={handleProposeTopic}
                proposedTopics={proposedTopics}
              />
            }
          ></Route>
          <Route
            path="/thesislist"
            element={
              <ThesisList
                handleSubmitProposal={handleSubmitProposal}
                supervisedTheses={supervisedTheses}
              />
            }
          ></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
