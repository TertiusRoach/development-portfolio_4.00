// IndexRightbar.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getSVG } from '../../../../modules/utilities/getFile';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import AsideRightbar from '../../../components/Aside/rightbar/Aside.rightbar';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: String | 'landscape' | 'portrait';
    identification: String | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexRightbar: React.FC<InfoProps> = ({ info }) => {
  const jQueryTimer: number = 4000;
  const blockName: String = 'rightbar';
  const pageName: String = info.identification;

  setTimeout(() => jQueryRightbar(pageName, blockName), jQueryTimer);
  return <AsideRightbar labelName="default" blockName={`${blockName}`} info={info} stateType="" />;
};
export default IndexRightbar;

function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[id*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');

      $(`#${pageName}-header`).removeClass('blurred');
      $(`#${pageName}-main section`).removeClass('blurred');
      $(`#${pageName}-footer`).removeClass('blurred');
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
