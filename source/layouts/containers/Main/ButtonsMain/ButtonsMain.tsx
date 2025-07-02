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
      `#${pageName}-header .${pageName}-menu li[class*="load"] select`
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
      {handleButtons(info.pageName, info.blockName)}
    </main>
  );
};
export default ButtonsMain;
