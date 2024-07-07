import React from 'react';

const DefaultRightbar: React.FC = () => {
  console.log('DefaultRighbar Loaded');
  return (
    <>
      <aside style={{ zIndex: 0 }}>
        <p>This is the rightbar content area.</p>
      </aside>
    </>
  );
};

export default DefaultRightbar;
