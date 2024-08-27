// IndexLeftbar.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AsideLeftbar from '../../../components/Aside/leftbar/Aside.leftbar';

import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: String | 'landscape' | 'portrait';
    identification: String | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const ResumeLeftbar: React.FC<InfoProps> = ({ info }) => {
  const jQueryTimer: number = 4000;
  const blockName: String = 'leftbar';
  const pageName: String = info.identification;

  useEffect(() => {
    const jQueryStart = () => {
      jQueryLeftbar(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryLeftbar(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);
  return <AsideLeftbar labelName="default" blockName={`${blockName}`} info={info} stateType="" />;
};
export default ResumeLeftbar;
function jQueryLeftbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
