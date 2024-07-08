import $ from 'jquery';
import React from 'react';

const IndexMain: React.FC = () => {
  console.log('IndexMain Loaded');
  return (
    <main id="index-main" className="default-main" style={{ zIndex: 0 }}>
      <button>
        <h1>leftbar-button</h1>
      </button>
      <button>
        <h1>rightbar-button</h1>
      </button>
    </main>
  );
};

export default IndexMain;
