//--|🠊 OvertimeFooter.tsx 🠈|--//
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
  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <footer id={`${pageName}-${blockName}`} className={`default-${blockName} collapsed`} style={{ zIndex: 1 }}></footer>
  );
};
export default OvertimeFooter;
