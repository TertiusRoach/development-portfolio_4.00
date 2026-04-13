//--|🠊 ButtonsMain.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Elements 🠋|--\\
import DefaultButtons from './elements/default-buttons/DefaultButtons';
import RoutingButtons from './elements/routing-buttons/RoutingButtons';
//--|🠋 Functions 🠋|--\\
import { defaultPreview } from './ButtonsFunctions';
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

const ButtonsMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'buttons';

  useEffect(() => {
    //--|🠊 Add Screen Size Detection 🠈|--\\
    defaultPreview(pageName, blockName, 'h1-size');
  }, [pageName, blockName]);

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
export default ButtonsMain;
