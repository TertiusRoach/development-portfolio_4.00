import React from 'react';

const IndexLeftbar: React.FC = () => {
  console.log('IndexLeftbar Loaded');
  return (
    <>
      <aside id="index-leftbar" className="default-leftbar" style={{ zIndex: 5 }}>
        <p>This is the leftbar content area.</p>
      </aside>
    </>
  );
};

export default IndexLeftbar;
