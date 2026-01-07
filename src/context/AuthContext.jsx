import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('wiremail_user');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      setUser(null);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    try { localStorage.setItem('wiremail_user', JSON.stringify(userData)); } catch (e) {}
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem('wiremail_user'); } catch (e) {}
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
