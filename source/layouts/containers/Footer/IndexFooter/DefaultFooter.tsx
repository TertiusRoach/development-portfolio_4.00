import React from 'react';

const DefaultFooter: React.FC = () => {
  console.log('DefaultFooter Loaded');
  return (
    <>
      <footer style={{ zIndex: 0 }}>
        <h1>Welcome to my App!</h1>
        <p>This is the footer content area.</p>
      </footer>
    </>
  );
};

export default DefaultFooter;
