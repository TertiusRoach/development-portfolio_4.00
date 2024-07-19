// index.tsx
import './styles/index.scss';
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

// Import container components
import IndexMain from './layouts/containers/Main/IndexMain/IndexMain';
import IndexHeader from './layouts/containers/Header/IndexHeader/IndexHeader';
import IndexFooter from './layouts/containers/Footer/IndexFooter/IndexFooter';
import IndexOverlay from './layouts/containers/Overlay/IndexOverlay/IndexOverlay';
import IndexLeftbar from './layouts/containers/Leftbar/IndexLeftbar/IndexLeftbar';
import IndexRightbar from './layouts/containers/Rightbar/IndexRightbar/IndexRightbar';

import { getResolution, getOrientation, getIdentification } from './scripts/index'; // Import functions (assuming they return strings)
const DefaultBody = document.getElementById('index-body') as HTMLElement;
function Body() {
  const [infoPROP, newPROP] = useState({
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: `${getIdentification()}`,
  });

  useEffect(() => {
    function updatePROP() {
      newPROP({
        resolution: `${getResolution()}`,
        orientation: `${getOrientation()}`,
        identification: `${getIdentification()}`,
      });
    }
    updatePROP(); // Update the infoPROP on mount
    window.addEventListener('resize', updatePROP); // Add event listener for window resize

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener('resize', updatePROP);
    };
  }, []);
  return (
    <>
      <IndexHeader icons={iconHREF} info={infoPROP} />

      <IndexMain icons={iconHREF} info={infoPROP} />

      <IndexFooter icons={iconHREF} info={infoPROP} />

      <IndexLeftbar icons={iconHREF} info={infoPROP} />

      <IndexRightbar icons={iconHREF} info={infoPROP} />

      <IndexOverlay icons={iconHREF} info={infoPROP} />
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'index-body' not found.");
}

const iconURI: String =
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/7933f224694301f53e0de7771db12700668d8d55/source/assets/svg-files';
export const iconHREF = {
  working: `${iconURI}/font-awesome/solid/hard-hat.svg`,
  close: `${iconURI}/font-awesome/solid/times.svg`,
  download: `${iconURI}/font-awesome/solid/download.svg`,
  home: `${iconURI}/font-awesome/solid/home.svg`,
  skills: `${iconURI}/font-awesome/solid/lightbulb.svg`,
  contact: `${iconURI}/font-awesome/solid/phone.svg`,
  projects: `${iconURI}/font-awesome/solid/code.svg`,
  career: `${iconURI}/font-awesome/solid/briefcase.svg`,
  viewOverlay: `${iconURI}/font-awesome/solid/star.svg`,
  viewLeftbar: `${iconURI}/font-awesome/solid/angle-right.svg`,
  viewRightbar: `${iconURI}/font-awesome/solid/angle-left.svg`,
  gitHub: `${iconURI}/font-awesome/brands/github.svg`,
  youTube: `${iconURI}/font-awesome/brands/youtube.svg`,
  linkedIn: `${iconURI}/font-awesome/brands/linkedin.svg`,

  signatureIcon: `${iconURI}/tertius-roach/signature-icon/primary-light.svg`,
  signatureStacked: `${iconURI}/tertius-roach/signature-stacked/primary-light.svg`,
  signatureAdjacent: `${iconURI}/tertius-roach/signature-adjacent/primary-light.svg`,
};
