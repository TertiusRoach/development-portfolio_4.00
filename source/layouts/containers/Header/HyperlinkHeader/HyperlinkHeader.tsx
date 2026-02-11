//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/hyperlink';
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠋 Components 🠋|--//
import ButtonDefault from '../../../components/Button/default/Button.default';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const HyperlinkHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const pageName = stripBrackets(info.pageName, '[]') as 'hyperlink';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  useEffect(() => {
    console.log('//--|🠊 Hyperlink Loaded 🠈|--//');
  }, [pageName, blockName]);

  let svgPath: Array<String> = ['', '', ''];
  return (
    <header id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 2 }}>
      <section className={`${blockName}-foreground`}></section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default HyperlinkHeader;
