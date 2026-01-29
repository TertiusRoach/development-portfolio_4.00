//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
import { clearSection } from '../../../components/Section/buttons/Section_buttons';
//--|🠋 Components 🠋|--\\
const SectionButtons = lazy(() => import('../../../components/Section/buttons/Section.buttons'));

import ButtonDefault from '../../../components/Button/default/Button.default';

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const imagePath =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source';

  const handleButtons = (pageName: string, blockName: string) => {
    let page: string = pageName;
    let block: string = blockName;
    return <SectionButtons info={info} />;
  };

  useEffect(() => {
    let loadSelect = document.querySelector(
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`,
    ) as HTMLSelectElement;

    if (loadSelect) {
      loadSelect.addEventListener('change', () => handleButtons(info.pageName, info.blockName));

      return () => {
        clearSection();
        loadSelect.removeEventListener('change', () => handleButtons(info.pageName, info.blockName));
      };
    } else {
      console.warn('Load select element not found.');
    }
  }, [pageName, blockName, [info]]);

  return (
    <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}>
      <section className="foreground">
        <div className="h1-size visible">
          <aside className="left-dark">
            <ButtonDefault
              style={{
                view: '-top-',
                text: `Button`,
                shade: '~dark~',
                color: '(mono)',
                size: '<h1>',
                image: `${imagePath}/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg`,

                type: '{button}',
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
              }}
            />
          </aside>
          <section className="info-view"></section>
          <aside className="right-light"></aside>
        </div>
        {/* <div className="h2-size hidden">
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
        </div> */}
      </section>
      <aside className="midground"></aside>
      <div className="background">
        <header>
          <div></div>
          <div></div>
        </header>
        <aside className="left"></aside>
        <aside className="right"></aside>
        <footer>
          <div></div>
          <div></div>
        </footer>
      </div>

      {/* {handleButtons(info.pageName, info.blockName)} */}
    </main>
  );
};
export default ButtonsMain;
