import React from 'react';

const DefaultMain: React.FC = () => {
  console.log('DefaultMain Loaded');
  return (
    <>
      <main style={{ zIndex: 0 }}>
        <p>This is the main content area.</p>
      </main>
    </>
  );
};

export default DefaultMain;
