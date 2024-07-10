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

const DefaultBody = document.getElementById('index-body') as HTMLElement;
function Body() {
  console.log(getResolution());
  console.log(getOrientation());
  console.log(getIdentification());
  const information: Object = {
    resolution: getResolution(),
    orientation: getOrientation(),
    identification: getIdentification(),
  };
  switch (getIdentification()) {
    case 'resume':
      return (
        <>
          {/* <ResumeLeftbar /> */}
          {/* <ResumeRightbar /> */}
          {/* <ResumeOverlay /> */}

          {/* <ResumeHeader /> */}
          {/* <ResumeMain /> */}
          {/* <ResumeFooter /> */}
        </>
      );
    case 'ticket':
      return (
        <>
          {/* <TicketLeftbar /> */}
          {/* <TicketRightbar /> */}
          {/* <TicketOverlay /> */}

          {/* <TicketHeader /> */}
          {/* <TicketMain /> */}
          {/* <TicketFooter /> */}
        </>
      );
    case 'university':
      return (
        <>
          {/* <UniversityLeftbar /> */}
          {/* <UniversityRightbar /> */}
          {/* <UniversityOverlay /> */}

          {/* <UniversityHeader /> */}
          {/* <UniversityMain /> */}
          {/* <UniversityFooter /> */}
        </>
      );
    default:
      return (
        <>
          <IndexHeader />
          <IndexMain />
          <IndexFooter />

          {/* <IndexLeftbar /> */}
          {/* <IndexRightbar /> */}
          {/* <IndexOverlay /> */}
        </>
      );
  }
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'index-body' not found.");
}

/*
import './layouts/containers/Footer/IndexFooter/IndexFooter';
import './layouts/containers/Header/IndexHeader/IndexHeader';
import './layouts/containers/Overlay/IndexOverlay/IndexOverlay';
import './layouts/containers/Leftbar/IndexLeftbar/IndexLeftbar';
import './layouts/containers/Rightbar/IndexRightbar/IndexRightbar';
*/

// Simplified function definition (optional argument)
