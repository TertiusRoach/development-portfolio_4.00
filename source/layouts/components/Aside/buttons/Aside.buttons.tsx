//--|🠊 Aside.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Aside.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton, sizeDivs } from './Aside_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import AsideMain from './extensions/Aside-main';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
  };
  style: {
    specSize: Array<string>;
    specView: Array<string>;
    specShade: Array<string>;
  };
}
const AsideButtons: React.FC<InfoProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const handleButtons = (pageName: string, blockName: 'main') => {
    const theseTags: { [key: string]: HTMLElement | null } = {
      bodyPage: document.querySelector(`body #${pageName}-body`) as HTMLElement | null,
      mainPage: document.querySelector(`main[id*="${pageName}-main"]`) as HTMLElement | null,
      headPage: document.querySelector(`header[id*="${pageName}-header"]`) as HTMLElement | null,
      footPage: document.querySelector(`footer[id*="${pageName}-footer"]`) as HTMLElement | null,
      overPage: document.querySelector(`section[id*="${pageName}-overlay"]`) as HTMLElement | null,
      leftPage: document.querySelector(`aside[id*="${pageName}-leftbar"]`) as HTMLElement | null,
      rightPage: document.querySelector(`aside[id*="${pageName}-rightbar"]`) as HTMLElement | null,
    };
    switch (blockName) {
      case 'main':
        return (
          <>
            <div className="h1-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h1>',
                  specView: style.specView[0],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h1>',
                  specView: style.specView[0],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h1>',
                  specView: style.specView[0],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="h2-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h2>',
                  specView: style.specView[1],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h2>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h2>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="h3-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h3>',
                  specView: style.specView[2],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h3>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h3>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="h4-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h4>',
                  specView: style.specView[3],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h4>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h4>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="h5-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h5>',
                  specView: style.specView[4],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h5>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h5>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="h6-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h6>',
                  specView: style.specView[5],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h6>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<h6>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
            <div className="p-size visible">
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<p>',
                  specView: style.specView[6],
                  specShade: style.specShade[0],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<p>',
                  specView: style.specView[1],
                  specShade: style.specShade[1],
                }}
                info={info}
              />
              <AsideMain
                style={{
                  specLoad: '[default]',
                  specSize: '<p>',
                  specView: style.specView[1],
                  specShade: style.specShade[2],
                }}
                info={info}
              />
            </div>
          </>
        );
    }
  };

  useEffect(() => {
    // setTimeout(() => handleButtons(pageName, blockName), 250);
  }, [pageName, blockName]);

  return <aside className="dar-aside">{handleButtons(pageName, blockName)}</aside>;
};
export default AsideButtons;

export function viewColor(pageName: string) {
  let viewColor = document.querySelector(`#${pageName}-header .buttons-menu li[class*="color"] select`) as HTMLSelectElement;
  switch (viewColor.value) {
    case 'mono-color':
      return console.log(`${viewColor.value}`);
    case 'red-color':
      return console.log(`${viewColor.value}`);
    case 'green-color':
      return console.log(`${viewColor.value}`);
    case 'blue-color':
      return console.log(`${viewColor.value}`);
    default:
      return console.log(`${viewColor.value}`);
  }
}
