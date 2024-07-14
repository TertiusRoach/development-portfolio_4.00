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
      <IndexHeader
        info={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexMain info={infoPROP} icons={iconsHREF} />

      <IndexFooter
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexLeftbar
        info={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexRightbar
        info={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexOverlay
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'index-body' not found.");
}

export const iconsHREF = {
  working:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/hard-hat.svg',
  close:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg',
  download:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg',
  home: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  skills:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  contact:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  projects:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/code.svg',
  career:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/briefcase.svg',
  viewOverlay:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/star.svg',
  viewLeftbar:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-right.svg',
  viewRightbar:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-left.svg',
  signatureStacked:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-stacked/primary-light.svg',
  signatureAdjacent:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-adjacent/primary-light.svg',
  gitHub:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/github.svg',
  youTube:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/youtube.svg',
  linkedIn:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/linkedin.svg',
};
