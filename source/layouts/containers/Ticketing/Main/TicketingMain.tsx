//--|🠊 TicketingMain.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';

//--|🠋 Components 🠋|--\\
import DivisionDefault from '../../../components/Division/default/Division.default';

//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

interface InfoProps {
  info: {
    pageName: '[ticketing]' | string;
    blockName: '<main>' | string;
    labelName: '(default)' | string;
  };
}

const HyperlinkMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'ticketing';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <DivisionDefault
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </main>
  );
};
export default HyperlinkMain;

/*
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/ticketing';
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../components/Button/default/Button.default';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const labelName = 'pending' as string;
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'ticketing';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Array<String> = ['', '', ''];

  return (
    <main id={`${pageName}-${blockName}`} className={`default-${blockName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <header className="default-header"></header>
        <nav className="default-navigation"></nav>
        <div className="default-division"></div>
      </section>
      <figure className={`${blockName}-midground`}>
        <aside className="left-side downplay"></aside>
        <aside className="right-side downplay"></aside>
      </figure>
      <div className={`${blockName}-background`}>
        <header></header>
        <aside className="left-side downplay"></aside>
        <aside className="right-side downplay"></aside>
        <footer></footer>
      </div>
    </main>
  );
};
export default OvertimeMain;
*/
