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
  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome';
export const iconHREF = {
  working: `${iconURI}/solid/hard-hat.svg`,
  close: `${iconURI}/solid/times.svg`,
  download: `${iconURI}/solid/download.svg`,
  home: `${iconURI}/solid/home.svg`,
  skills: `${iconURI}/solid/lightbulb.svg`,
  contact: `${iconURI}/solid/phone.svg`,
  projects: `${iconURI}/solid/code.svg`,
  career: `${iconURI}/solid/briefcase.svg`,
  viewOverlay: `${iconURI}/solid/star.svg`,
  viewLeftbar: `${iconURI}/solid/angle-right.svg`,
  viewRightbar: `${iconURI}/solid/angle-left.svg`,
  gitHub: `${iconURI}/brands/github.svg`,
  youTube: `${iconURI}/brands/youtube.svg`,
  linkedIn: `${iconURI}/brands/linkedin.svg`,

  signatureStacked:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-stacked/primary-light.svg',
  signatureAdjacent:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-adjacent/primary-light.svg',
};
