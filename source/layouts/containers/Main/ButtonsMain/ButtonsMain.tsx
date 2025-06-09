//--|🠊 ButtonsMain.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import TableWeeks from '../../../components/Table/weeks/Table.weeks';
import ArticleLeave from '../../../components/Article/leave/Article.leave';
import ButtonStretch from '../../../components/Button/stretch/Button.stretch';
import NavigationWeeks from '../../../components/Navigation/weeks/Navigation.weeks';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | '[buttons]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';

  useEffect(() => {
    let selector = `#${pageName}-${blockName} .marketing-section`;
    let addSpace = document.querySelector(selector) as HTMLElement;

    if (!addSpace) return;

    let hidePromo = () => {
      addSpace.style.opacity = '0';

      setTimeout(() => {
        addSpace.style.display = 'none';
      }, 250);
    };

    addSpace.addEventListener('mouseenter', hidePromo);
    return () => {
      addSpace.removeEventListener('mouseenter', hidePromo);
    };
  }, [pageName, blockName]);

  return <main style={{ zIndex: 0 }} id={`${pageName}-${blockName}`} className={`default-${blockName}`}></main>;
};
export default ButtonsMain;
