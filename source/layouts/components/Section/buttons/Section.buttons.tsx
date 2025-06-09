//--|🠊 Section.buttons.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Section.buttons.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
import { defineButton } from './Section_buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../Button/archive/default/Button.default';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[buttons]' | string;
    blockName: '<main>' | string;
    roleName?: string;
  };
}
const SectionButtons: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const stateName: 'highlight' | 'downplay' = 'downplay';

  const handlePreview = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  let trackDay: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/track-day/track-day-medium.svg';
  let logTicket: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/log-ticket/log-ticket-medium.svg';
  let findLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/933b2050d063d05d5c7ca0f4122f613511cc68c9/source/assets/svg-files/trinity-apps/rebrand/find-link/find-link-medium.svg';

  return (
    <section className="buttons-section">
      <div className="buttons-dark">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div>

      <div className="buttons-medium">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div>

      <div className="buttons-light">
        <button>Top</button>
        <button>Bottom</button>

        <button>Left</button>
        <button>Right</button>
        <button>Center</button>

        <button>Text</button>
        <button>Icon</button>
      </div>
    </section>
  );
};
export default SectionButtons;
