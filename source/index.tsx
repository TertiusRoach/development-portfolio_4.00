// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles
import '../source/styles/index.scss';

function getPageId() {
  const queryString = window.location.href;
  const getHTML = queryString.split('.html')[0].split('/').pop();
  return getHTML;
}

// blockTag: string = '<header>' | '<main>' | '<footer>' | '<leftbar>' | '<rightbar>' | '<overlay>'
function getBlockTag(blockTag: '<header>' | '<main>' | '<footer>' | '<leftbar>' | '<rightbar>' | '<overlay>') {
  console.log(blockTag); // Should return the base name of the current HTML file
  return '';
}
// deviceType: string = 'desktop-landscape' | 'mobile-portrait'
function getDeviceType() {
  return '';
}

const Main = getBlockTag('<main>');

console.log(Main);
