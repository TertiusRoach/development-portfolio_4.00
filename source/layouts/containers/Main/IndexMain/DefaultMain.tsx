import React from 'react';

const DefaultMain: React.FC = () => {
  console.log('DefaultMain Loaded');
  return (
    <>
      <main style={{ zIndex: 0 }}>
        <h1>Welcome to my App!</h1>
        <p>This is the main content area.</p>
      </main>
    </>
  );
};

export default DefaultMain;
