//--|🠊 OvertimeRightbar.tsx 🠈|--//
//--|🠋 Frameworks 🠋|--//
import React, { useState, useEffect } from 'react';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
import FormReset from '../../../components/Form/reset/Form.reset';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const LandingRightbar: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'rightbar';

  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`} style={{ zIndex: 2 }}>
      <h4 className="reset-label display-4">Reset</h4>
      <FormReset info={info} />
    </aside>
  );
};
export default LandingRightbar;
