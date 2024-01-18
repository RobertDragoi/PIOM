import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { FaUserTie } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Header.scss';
export const Header = () => {
  const userContext = useContext(UserContext);
  const { updateUserInfo, username, role } = userContext;
  const handleUserInfo = () => {
    const newRole = role === 'Student' ? 'Teacher' : 'Student';
    const newUserName =
      username === 'Mr/Mrs. Teacher' ? 'Student' : 'Mr/Mrs. Teacher';
    updateUserInfo(newUserName, newRole);
  };
  return (
    <div className="header-container">
      <div className="header-container-left">
        <Link to="/proposals" className="header-item">
          <p>Teacher Proposals</p>
        </Link>
        <Link to="/thesislist" className="header-item">
          <p>
            {role === 'Teacher' ? 'Supervised thesis list' : 'Propose thesis'}
          </p>
        </Link>
      </div>
      <div className="header-container-right">
        <div className="header-item">
          <IconContext.Provider value={{ size: '2em' }}>
            <div onClick={() => handleUserInfo()}>
              {username} <FaUserTie />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
