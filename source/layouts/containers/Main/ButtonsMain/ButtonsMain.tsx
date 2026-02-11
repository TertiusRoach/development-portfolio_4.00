//--|🠊 ButtonsMain.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Elements 🠋|--\\
import DefaultButtons from './elements/default-buttons/DefaultButtons';
import RoutingButtons from './elements/routing-buttons/RoutingButtons';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
//

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../components/Label/toggle/Label.toggle';
import ButtonDefault from '../../../components/Button/default/Button.default';
import ButtonRouting from '../../../components/Button/routing/Button.routing';

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
type HandleButtons = (
  pageName: string,
  pagePreview: 'default-buttons' | 'routing-buttons',

  blockName: string,
  blockEvent: 'scroll-mouse' | 'control-preview' | 'toggle-aside',
  blockAction: 'open-dark' | 'close-dark' | 'open-light' | 'close-light' | 'go-up' | string,
) => void;

const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';
  return (
    <main id={`${pageName}-${blockName}`} className={`default-${blockName}`} style={{ zIndex: 0 }}>
      <div className="carousel-container">
        <ul className="carousel-preview slide-def">
          <li className="default-buttons">
            <DefaultButtons info={info} />
          </li>
          <li className="routing-buttons">
            <RoutingButtons info={info} />
          </li>
        </ul>
      </div>
    </main>
  );
};
function exportElements(info: InfoProps['info'], listName: 'default-buttons' | 'routing-buttons') {
  switch (listName) {
    case 'default-buttons':
      return <DefaultButtons info={info} />;
    case 'routing-buttons':
      return <RoutingButtons info={info} />;
  }
}
export default ButtonsMain;
