// Password Context.tsx
//--|🠋 This file doesn't 🠋|--//
import React, { createContext, useContext, useState } from 'react';

//--|🠋 Define the context type 🠋|--//
interface PasswordContextType {
  password: string;
  setPassword: (password: string) => void;
}

//--|🠋 Create the context 🠋|--//
const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

//--|🠋 Provider Component 🠋|--//
export const PasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');

  return <PasswordContext.Provider value={{ password, setPassword }}>{children}</PasswordContext.Provider>;
};

//--|🠋 Custom Hook for Accessing Context 🠋|--//
export const usePassword = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
};
