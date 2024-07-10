import React from 'react';

const IndexHeader: React.FC = () => {
  console.log('IndexHeader Loaded');
  return (
    <>
      <header id="index-header" className="default-header" style={{ zIndex: 2 }}>
        <img src="" alt="" />
        {/* <p>This is the header content area.</p> */}
      </header>
    </>
  );
};

export default IndexHeader;
