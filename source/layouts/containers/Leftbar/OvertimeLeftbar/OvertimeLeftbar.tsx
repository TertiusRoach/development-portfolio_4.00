//--|🠊 OvertimeLeftbar.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import NavigationClocking from '../../../components/Navigation/clocking/Navigation.clocking';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const OvertimeLeftbar: React.FC<InfoProps> = ({ info }) => {
  const labelName = 'clocking' as string;
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  let svgPath: Array<String> = ['', '', ''];

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <NavigationClocking
          //--|🠊 <nav class="track-leftbar"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        {/*
        <DataWeek
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        */}
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default OvertimeLeftbar;
