//--|🠊 DemonstrationSection.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import SectionDemonstration from '../../../../../../components/Section/demonstration/Section.demonstration';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../tools/conversions';

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
            labelName: 'dark-card',
          }}
          style={{
            shade: '~dark~',
            color: '(orange)',
          }}
          cases={{
            apps: ['track-a-day', 'log-a-ticket', 'find-a-link', 'tralogfin'],
          }}
        />
        <SectionDemonstration
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'light-card',
          }}
          style={{
            shade: '~light~',
            color: '(orange)',
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
