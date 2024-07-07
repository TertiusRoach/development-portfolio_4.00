import React from 'react';

const DefaultHeader: React.FC = () => {
  console.log('DefaultHeader Loaded');
  return (
    <>
      <header style={{ zIndex: 0 }}>
        <p>This is the header content area.</p>
      </header>
    </>
  );
};

export default DefaultHeader;
