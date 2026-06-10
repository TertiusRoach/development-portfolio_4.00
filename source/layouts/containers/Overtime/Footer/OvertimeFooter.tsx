//--|🠊 OvertimeFooter.tsx 🠈|--\\

/*
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuOvertime from '../../../components/Menu/overtime/Menu.overtime';
import SpanScrolling from '../../../components/Span/scrolling/Span.scrolling';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const OvertimeFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 1 }}>
      <section className={`${blockName}-foreground`}></section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </footer>
  );
};
export default OvertimeFooter;
*/
