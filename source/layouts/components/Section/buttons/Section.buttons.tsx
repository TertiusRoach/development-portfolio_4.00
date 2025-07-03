//--|🠊 Section.buttons.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect, useState } from 'react';
//--|🠋 Styles 🠋|--\\
import './Section.buttons.scss';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
import { sizeDivs, loadStyle } from './Section_buttons';
//--|🠋 Components 🠋|--\\
const AsideButtons = lazy(() => import('../../Aside/buttons/Aside.buttons'));

const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  let [getStyle, setStyle] = useState<string>(loadStyle(pageName) || '[default]');

  const handleButtons = (pageName: 'buttons') => {
    let loadSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`
    ) as HTMLSelectElement;
    let colorSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="color"] select`
    ) as HTMLSelectElement;

    return (
      <>
        <div className="h1-size visible">
          <AsideButtons
            style={{
              specSize: '<h1>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h1>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h1>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="h2-size hidden">
          <AsideButtons
            style={{
              specSize: '<h2>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h2>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h2>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="h3-size hidden">
          <AsideButtons
            style={{
              specSize: '<h3>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h3>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h3>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="h4-size hidden">
          <AsideButtons
            style={{
              specSize: '<h4>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h4>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h4>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="h5-size hidden">
          <AsideButtons
            style={{
              specSize: '<h5>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h5>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h5>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="h6-size hidden">
          <AsideButtons
            style={{
              specSize: '<h6>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h6>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<h6>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
        </div>
        <div className="p-size hidden">
          <AsideButtons
            style={{
              specSize: '<p>',
              specShade: '~dark~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<p>',
              specShade: '~medium~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
          <AsideButtons
            style={{
              specSize: '<p>',
              specShade: '~light~',
              specColor: colorSelect.value,
              specLoad: loadSelect.value as '[default]' | '[cleaned]' | '[stretch]',
            }}
            info={info}
          />
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
      handleButtons(pageName);
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
      {handleButtons(pageName)}
    </section>
  );
};
export default SectionButtons;

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
