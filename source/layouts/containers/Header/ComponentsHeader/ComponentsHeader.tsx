//--|🠊 ComponentsHeader.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/components';

interface InfoProps {
  info: {
    //--|🠋 pageName: Id that represents the application 🠋|--\\
    pageName: '[components]';
    //--|🠋 blockName: 'Toggles between '/containers' folders. 🠋|--\\
    blockName: '<footer>' | '<header>' | '<leftbar>' | '<main>' | '<overlay>' | '<rightbar>';
    //--|🠋 labelName: Class name marker for all components. 🠋|--\\
    labelName: '(default)' | string;
  };
}
const ComponentsHeader: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'expanded';

  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<ComponentsHeader>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default ComponentsHeader;
/*
import React, { useEffect } from 'react';
//--|🠋 Elements 🠋|--\\
import DefaultButtons from './elements/default-buttons/DefaultButtons';
import RoutingButtons from './elements/routing-buttons/RoutingButtons';
//--|🠋 Functions 🠋|--\\
import { defaultPreview } from './ElementsFunctions';
import { stripBrackets } from '../../../scripts/buttons';

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
*/
