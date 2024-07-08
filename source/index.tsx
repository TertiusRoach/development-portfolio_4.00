import React from 'react';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';

import { getOrientation, getResolution, getIdentification } from './scripts/index';

import IndexMain from './layouts/containers/Main/IndexMain/IndexMain';
import IndexHeader from './layouts/containers/Header/IndexHeader/IndexHeader';
import IndexFooter from './layouts/containers/Footer/IndexFooter/IndexFooter';
import IndexOverlay from './layouts/containers/Overlay/IndexOverlay/IndexOverlay';
import IndexLeftbar from './layouts/containers/Leftbar/IndexLeftbar/IndexLeftbar';
import IndexRightbar from './layouts/containers/Rightbar/IndexRightbar/IndexRightbar';

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

  // className = 'default-blockName'

  const information: Object = {
    resolution: getResolution(),
    orientation: getOrientation(),
    identification: getIdentification(),
  };
  // let pageName: string = `${getIdentification}`
  let className: string;
  let blockName: '<header>' | '<main>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>';

  return (
    <>
      <IndexLeftbar />
      {/* <IndexRightbar /> */}
      {/* <IndexOverlay /> */}

      {/* <IndexHeader /> */}
      {/* <IndexMain /> */}
      {/* <IndexFooter /> */}
    </>
  );
}

if (DefaultBody === null) {
  console.error("Element with id 'index-body' not found.");
} else if (DefaultBody !== null) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
}
