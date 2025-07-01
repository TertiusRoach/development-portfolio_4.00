//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { sizeDivs, loadStyle } from './Section_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import AsideButtons from '../../Aside/buttons/Aside.buttons';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  const [getStyle, setStyle] = useState<string>(loadStyle(pageName) || '[default]');

  const handleButtons = (pageName: string, blockName: string) => {
    let loadSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`
    ) as HTMLSelectElement;

    let page = pageName as '[buttons]';
    let block = blockName as '<main>';
    return (
      <>
        <div className="h1-size visible">
          <AsideButtons
            style={{
              specSize: '<h1>',
              specShade: '~dark~',
              specLoad: loadSelect.value as '[default]' | '[cleaned]',
            }}
            info={info}
            load={getStyle}
          />
        </div>
        <div className="h2-size hidden">
          <AsideButtons
            style={{
              specSize: '<h1>',
              specShade: '~dark~',
              specLoad: loadSelect.value as '[default]' | '[cleaned]',
            }}
            info={info}
            load={getStyle}
          />
        </div>
        <div className="h3-size hidden">
          {/* <AsideButtons
            info={info}
            style={{
              specSize: '<h3>',
              specShade: ['~dark~', '~medium~', '~light~'],
              specLoad: getStyle as '[default]' | '[cleaned]',
              specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
            }}
            load={getStyle}
          /> */}
        </div>
        <div className="h4-size hidden">
          {/* <AsideButtons
            info={info}
            style={{
              specSize: '<h4>',
              specShade: ['~dark~', '~medium~', '~light~'],
              specLoad: getStyle as '[default]' | '[cleaned]',
              specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
            }}
            load={getStyle}
          /> */}
        </div>
        <div className="h5-size hidden">
          {/* <AsideButtons
            info={info}
            style={{
              specSize: '<h5>',
              specShade: ['~dark~', '~medium~', '~light~'],
              specLoad: getStyle as '[default]' | '[cleaned]',
              specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
            }}
            load={getStyle}
          /> */}
        </div>
        <div className="h6-size hidden">
          {/* <AsideButtons
            info={info}
            style={{
              specSize: '<h6>',
              specShade: ['~dark~', '~medium~', '~light~'],
              specLoad: getStyle as '[default]' | '[cleaned]',
              specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
            }}
            load={getStyle}
          /> */}
        </div>
        <div className="p-size hidden">
          {/* <AsideButtons
            info={info}
            style={{
              specSize: '<p>',
              specShade: ['~dark~', '~medium~', '~light~'],
              specLoad: getStyle as '[default]' | '[cleaned]',
              specView: ['-top-', '-bottom-', '-left-', '-right-', '-center-', '-text-', '-icon-'],
            }}
            load={getStyle}
          /> */}
        </div>
      </>
    );
  };

  useEffect(() => {
    let loadSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`
    ) as HTMLSelectElement;

    let handleChange = () => {
      setStyle(loadSelect.value);
      handleButtons(pageName, blockName);
    };
    if (loadSelect) {
      loadSelect.addEventListener('change', handleChange);
    }

    sizeDivs(pageName, blockName);
    window.addEventListener('resize', () => sizeDivs(pageName, blockName));

    return () => {
      loadSelect.removeEventListener('change', handleChange);
      window.removeEventListener('resize', () => sizeDivs(pageName, blockName));
    };
  }, [pageName, blockName]);

  return (
    <section className="buttons-section" key={getStyle}>
      {handleButtons(pageName, blockName)}
    </section>
  );
};
export default SectionButtons;
