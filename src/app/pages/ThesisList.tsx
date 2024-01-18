import React, { useContext } from 'react';
import ThesisProposal from '../components/ThesisProposal/ThesisProposal';
import SupervisedThesisList from '../components/SupervisedThesisList/SupervisedThesisList';
import { UserContext } from '../UserContext';
const ThesisList = ({ handleSubmitProposal, supervisedTheses }) => {
  const userContext = useContext(UserContext);
  const { role } = userContext;
  return (
    <div>
      {' '}
      {role === 'Student' && (
        <ThesisProposal onSubmitProposal={handleSubmitProposal} />
      )}
      {role === 'Teacher' && (
        <SupervisedThesisList role={role} theses={supervisedTheses} />
      )}
    </div>
  );
};

export default ThesisList;
