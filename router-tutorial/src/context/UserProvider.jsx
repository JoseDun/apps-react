import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const singIn = () => setUser(true);
  const singOut = () => setUser(false);
 
  return (
    <UserContext.Provider 
        value={{ user, singIn, singOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
