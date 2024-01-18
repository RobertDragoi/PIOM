import React, { useContext } from 'react';
import TeacherProposal from '../components/TeacherProposal/TeacherProposal';
import ProposedTopics from '../components/ProposedTopics/ProposedTopics';
import { UserContext } from '../UserContext';

const Proposals = ({ handleProposeTopic, proposedTopics }) => {
  const userContext = useContext(UserContext);
  const { role } = userContext;
  return (
    <div>
      {' '}
      {role === 'Teacher' && (
        <TeacherProposal onProposeTopic={handleProposeTopic} />
      )}
      <ProposedTopics proposedTopics={proposedTopics} />
    </div>
  );
};

export default Proposals;
