import React, { createContext, useContext, useState } from 'react';

//--|🠋 Define the context type 🠋|--//
interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}

//--|🠋 Create the context 🠋|--//
const EmailContext = createContext<EmailContextType | undefined>(undefined);

//--|🠋 Provider Component 🠋|--//
export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState('');

  return <EmailContext.Provider value={{ email, setEmail }}>{children}</EmailContext.Provider>;
};

//--|🠋 Custom Hook for Accessing Context 🠋|--//
export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
