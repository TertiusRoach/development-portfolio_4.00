import React from 'react';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';

import { getOrientation, getResolution, getIdentification } from './scripts/index';

import DefaultMain from './layouts/containers/Main/IndexMain/DefaultMain';

/*
import './layouts/containers/Footer/IndexFooter/DefaultFooter';
import './layouts/containers/Header/IndexHeader/DefaultHeader';
import './layouts/containers/Overlay/IndexOverlay/DefaultOverlay';
import './layouts/containers/Leftbar/IndexLeftbar/DefaultLeftbar';
import './layouts/containers/Rightbar/IndexRightbar/DefaultRightbar';
*/

// Simplified function definition (optional argument)
const DefaultBody = document.getElementById('index-body') as HTMLElement;

function Body() {
  console.log(getResolution());
  console.log(getOrientation());
  console.log(getIdentification());

  return (
    <>
      {/* Replace with your actual content */}
      <DefaultMain /> {/* Assuming DefaultMain provides your main content */}
      {/* You can add other components here */}
    </>
  );
}

if (DefaultBody === null) {
  console.error("Element with id 'index-body' not found.");
} else if (DefaultBody !== null) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
}
