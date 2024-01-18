import { createContext, useState } from 'react';

const UserContext = createContext({
  username: '',
  role: '',
  updateUserInfo: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Mr/Mrs. Teacher',
    role: 'Teacher',
  });

  const updateUserInfo = (username, role) => {
    setUser({ username, role });
  };

  return (
    <UserContext.Provider value={{ ...user, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
