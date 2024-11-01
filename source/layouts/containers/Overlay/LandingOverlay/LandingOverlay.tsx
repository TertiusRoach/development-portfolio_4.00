import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import MenuButton from '../../../components/Menu/button/Menu.button';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import toggleSection from '../../../../modules/utilities/toggleSection';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}

const LandingOverlay: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'overlay';
  const pageName = info.identification;

  useEffect(() => {
    console.log(`Initialized ${pageName} ${blockName}`);
  }, [pageName, blockName]);

  return (
    <section id={`${pageName}-${blockName}`} style={{ zIndex: 3 }} className={`default-${blockName}`}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: landscape)' }) && <Desktop pageName={pageName} blockName={blockName} />}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {useMediaQuery({ query: '(orientation: portrait)' }) && <Mobile pageName={pageName} blockName={blockName} />}
    </section>
  );
};

function Desktop({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  return <div>Desktop View for {pageName}</div>;
}

function Mobile({ pageName, blockName }: { pageName: string; blockName: string }) {
  console.log(`Refreshed: Desktop Orientation <${blockName}>`);
  return <div>Mobile View for {pageName}</div>;
}

export default LandingOverlay;
