import React from 'react';

const IndexMain: React.FC = () => {
  console.log('IndexMain Loaded');
  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <p>This is the main content area.</p>
    </main>
  );
};

export default IndexMain;
