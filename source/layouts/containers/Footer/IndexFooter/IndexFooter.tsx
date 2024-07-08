import React from 'react';

const IndexFooter: React.FC = () => {
  console.log('IndexFooter Loaded');
  return (
    <>
      <footer id="index-footer" className="default-footer" style={{ zIndex: 1 }}>
        <h1>Welcome to my App!</h1>
        <p>This is the footer content area.</p>
      </footer>
    </>
  );
};

export default IndexFooter;
