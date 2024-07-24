import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ButtonFade from '../../../components/Button/fade/Button.fade';
import AsideProjects from '../../../components/Aside/projects/Aside.projects';

import { getSVG } from '../../../../modules/utilities/getFile';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const IndexRightbar: React.FC<InfoProps> = ({ info }) => {
  const loadTimer: number = 5000;
  const blockName: String = 'rightbar';
  const pageName: String = info.identification;
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => jQueryRightbar(pageName, blockName), 250);
      },
      false
    );
    setTimeout(() => jQueryRightbar(pageName, blockName), loadTimer);
  }, []);
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  return <AsideProjects labelName="projects" stateType="" blockName={`${blockName}`} info={info} />;
};
export default IndexRightbar;

function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  $(`#${containerElement} button[class*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');

      $(`#${pageName}-header`).removeClass('disabled');
      $(`#${pageName}-main`).removeClass('disabled');
      $(`#${pageName}-footer`).removeClass('disabled');
    }
  });
  return console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
