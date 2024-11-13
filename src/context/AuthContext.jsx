// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

// Create a context with default value
const AuthContext = createContext({});

// Create a custom hook for using the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store the authenticated user

  // Mock functions for login, logout
  const login = (userData) => {
    setUser(userData); // Set user data on successful login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
