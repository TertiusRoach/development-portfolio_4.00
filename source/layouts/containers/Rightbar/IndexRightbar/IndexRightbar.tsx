import React from 'react';

const IndexRightbar: React.FC = () => {
  console.log('IndexRightbar Loaded');
  return (
    <>
      <aside id="index-rightbar" className="default-rightbar" style={{ zIndex: 4 }}>
        <p>This is the rightbar content area.</p>
      </aside>
    </>
  );
};

export default IndexRightbar;
