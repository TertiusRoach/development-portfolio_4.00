import React from 'react';

const IndexOverlay: React.FC = () => {
  console.log('IndexOverlay Loaded');
  return (
    <>
      <section id="index-overlay" className="default-overlay" style={{ zIndex: 3 }}>
        <p>This is the overlay content area.</p>
      </section>
    </>
  );
};

export default IndexOverlay;
