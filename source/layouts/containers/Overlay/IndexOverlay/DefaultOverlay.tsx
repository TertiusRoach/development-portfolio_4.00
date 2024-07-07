import React from 'react';

const DefaultOverlay: React.FC = () => {
  console.log('DefaultOverlay Loaded');
  return (
    <>
      <section style={{ zIndex: 0 }}>
        <p>This is the overlay content area.</p>
      </section>
    </>
  );
};

export default DefaultOverlay;
