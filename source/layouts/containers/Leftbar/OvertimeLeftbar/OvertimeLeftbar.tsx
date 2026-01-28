//--|🠊 OvertimeLeftbar.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Frameworks 🠋|--//
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Components 🠋|--//
import TimeDaily from '../../../components/Time/daily/Time.daily';
import MenuOvertime from '../../../components/Menu/overtime/Menu.overtime';
import SpanScrolling from '../../../components/Span/scrolling/Span.scrolling';
import DivisionIdentity from '../../../components/Division/identity/Division.identity';
import NavigationPreview from '../../../components/Navigation/preview/Navigation.preview';
import NavigationOvertime from '../../../components/Navigation/overtime/Navigation.overtime';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const OvertimeLeftbar: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';

  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside style={{ zIndex: 4 }} id={`${pageName}-${blockName}`} className={`default-${blockName} collapsed`}>
      <header className="clocking-header">
        <TimeDaily info={info} />
        <NavigationOvertime info={info} />
        <SpanScrolling block="<header>" info={info} />
      </header>
      <section className="clocking-section">
        <div className="ante-meridiem"></div>
        <div className="post-meridiem"></div>
      </section>
      <footer className="clocking-footer">
        <SpanScrolling block="<footer>" info={info} />
      </footer>
    </aside>
  );
};
export default OvertimeLeftbar;
