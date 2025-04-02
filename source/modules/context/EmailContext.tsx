//--|🠊 EmailContext.tsx 🠈|--//
import React, { createContext, useContext, useState } from 'react';

// Importing React features:
// - createContext: Allows us to create a context (global state) to share values between components without prop drilling.
// - useContext: Lets components consume the context's values and functions.
// - useState: Manages state (data that can change over time) inside the provider component.

// Summary:
// 1. We define a TypeScript interface (EmailContextType) to structure the context data.
// 2. We create the EmailContext using createContext with an initial value of 'undefined'.
// 3. The EmailProvider component wraps part of the app and provides access to 'email' and 'setEmail'.
// 4. The useEmail hook makes it easy to access the context values inside any child component.
// 5. If the hook is used outside of an EmailProvider, an error is thrown to prevent issues.

//--|🠋 Define the context type 🠋|--//
interface EmailContextType {
  email: string; // Stores the email address as a string.
  setEmail: (email: string) => void; // Function to update the email state.
}

//--|🠋 Create the context 🠋|--//
const EmailContext = createContext<EmailContextType | undefined>(undefined);

// Creates a context (a shared state for the email value and update function).
// The default value is 'undefined', ensuring components that use this context
// must be wrapped inside an EmailProvider; otherwise, an error will be thrown.

//--|🠋 Provider Component 🠋|--//
export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState('');
  // useState initializes the 'email' state with an empty string.
  // 'setEmail' is a function that allows us to update the email state dynamically.

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
      {/* The provider wraps around child components so they can use 'email' and 'setEmail'. */}
    </EmailContext.Provider>
  );
};

//--|🠋 Custom Hook for Accessing Context 🠋|--//
export const useEmail = () => {
  const context = useContext(EmailContext);
  // useContext(EmailContext) fetches the current values of 'email' and 'setEmail'.

  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
    // If 'useEmail' is called outside of an EmailProvider, it will throw an error.
    // This ensures the context is always available when needed.
  }

  return context;
  // Returns an object containing 'email' (current email state) and 'setEmail' (function to update it).
};

/*
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
*/
