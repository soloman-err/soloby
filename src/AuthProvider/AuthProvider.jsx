import React, { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authInfo = {
    // info
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
