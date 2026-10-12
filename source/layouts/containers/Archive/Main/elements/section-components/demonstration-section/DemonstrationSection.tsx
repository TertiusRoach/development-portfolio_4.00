//--|🠊 DemonstrationSection.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DemonstrationSection.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import SectionDemonstration from '../../../../../../components/Section/demonstration/Section.demonstration';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function DemonstrationSection({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';
  const labelName = info.labelName as 'demonstration';
  return (
    <aside className="demonstration-section">
      <section className={`${blockName}-foreground`}>
        <SectionDemonstration
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          cases={{
            apps: ['track-a-day', 'log-a-ticket', 'find-a-link', 'tralogfin'],
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default DemonstrationSection;
