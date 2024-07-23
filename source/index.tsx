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

import getSVG from './utilities/getSVG';
import getResolution from './utilities/getResolution';
import getOrientation from './utilities/getOrientation';
import getIdentification from './utilities/getIdentification';

const DefaultBody = document.getElementById('index-body') as HTMLElement;
function Body() {
  interface InfoProps {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  }

  let [infoPROP, newPROP] = useState<InfoProps>({
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: `${getIdentification()}`,
  });

  useEffect(() => {
    function newInfo() {
      newPROP({
        resolution: `${getResolution()}`,
        orientation: `${getOrientation()}`,
        identification: `${getIdentification()}`,
      });
    }
    newInfo();
    window.addEventListener('resize', newInfo);

    return () => {
      window.removeEventListener('resize', newInfo);
    };
  }, []);
  return (
    <>
      <IndexHeader info={infoPROP} />
      <IndexMain information={infoPROP} />
      <IndexFooter info={infoPROP} />

      <IndexOverlay info={infoPROP} />
      <IndexLeftbar info={infoPROP} />
      <IndexRightbar info={infoPROP} />
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'index-body' not found.");
}
