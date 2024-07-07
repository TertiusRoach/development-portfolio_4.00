import React from 'react';

const DefaultLeftbar: React.FC = () => {
  console.log('DefaultLeftbar Loaded');
  return (
    <>
      <aside style={{ zIndex: 0 }}>
        <p>This is the leftbar content area.</p>
      </aside>
    </>
  );
};

export default DefaultLeftbar;
