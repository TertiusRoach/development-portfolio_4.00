//--|🠊 OvertimeHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
import { expandHeader, loadSoftware } from './OvertimeFunctions';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../components/Button/default/Button.default';
import ButtonRouting from '../../../components/Button/routing/Button.routing';
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    labelName: '(default)' | '(tracking)' | '(clocking)' | '(request)' | '(profile)' | '(message)' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const OvertimeHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const labelName = stripBrackets(info.labelName, '()') as 'profile';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' = 'expanded';

  useEffect(() => {
    // console.log('//--|🠊 Overtime Loaded 🠈|--\\\\');
  }, [pageName, blockName]);

  let svgPath: Array<String> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/a2e108e4ff99bab6768dfd293556e017ee5da5b3/source/assets/svg-files/archive-images',
    '',
    '',
  ];

  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`} style={{ zIndex: 2 }}>
      <section className={`${blockName}-foreground`}></section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default OvertimeHeader;
