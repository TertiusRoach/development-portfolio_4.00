//--|🠊 ButtonsMain.tsx 🠈|--\\
import { lazy } from 'react';
import React, { useEffect } from 'react';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
import { clearSection } from '../../../components/Section/buttons/Section_buttons';
//--|🠋 Components 🠋|--\\
const SectionButtons = lazy(() => import('../../../components/Section/buttons/Section.buttons'));

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

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
          {/* <AsideButtons
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
          /> */}
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
