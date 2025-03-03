// IndexRightbar.tsx
import $ from 'jquery';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
import ButtonFade from '../../../components/Button/bin/fade/Button.fade';
import getResolution from '../../../../modules/utilities/getResolution';
import getOrientation from '../../../../modules/utilities/getOrientation';
import AsideRightbar from '../../../components/Aside/rightbar/Aside.rightbar';
import AsideProjects from '../../../components/Aside/projects/Aside.projects';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface InfoProps {
  info: {
    resolution: String;
    orientation: String | 'landscape' | 'portrait';
    identification: String | 'index' | 'resume' | 'ticket' | 'university' | 'fitness';
  };
}
const IndexRightbar: React.FC<InfoProps> = ({ info }) => {
  const jQueryTimer: number = 5000;
  const blockName: String = 'rightbar';
  const pageName: String = info.identification;

  useEffect(() => {
    const jQueryStart = () => {
      jQueryRightbar(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryRightbar(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);
  return <AsideProjects labelName="projects" blockName={`${blockName}`} info={info} stateType="" />;
};
export default IndexRightbar;
function jQueryRightbar(pageName: String, blockName: String) {
  const containerElement = `${pageName}-${blockName}` as String;
  /*
  $(`#${containerElement} button[id*="close"]`).on('click', () => {
    let safety = document.getElementById(`${pageName}-${blockName}`)?.className as string;
    console.log(safety);
    if (!safety.includes('blocked')) {
      $(`#${containerElement}.expanded`).addClass('collapsed');
      $(`#${containerElement}.collapsed`).removeClass('expanded');

      $(`#${pageName}-header`).removeClass('blurred');
      $(`#${pageName}-main section`).removeClass('blurred');
      $(`#${pageName}-footer`).removeClass('blurred');
    }
  });
  */
  /*
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
  */
  /*

  */
  console.log(`//--|🠊 Refreshed: jQuery <${blockName}> 🠈|--//`);
}
