//--|🠊 OvertimeLeftbar.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import NavigationClocking from '../../../components/Navigation/clocking/Navigation.clocking';
import TableClocking from '../../../components/Table/clocking/Table.clocking';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    labelName: '(default)' | '(tracking)' | '(clocking)' | '(request)' | '(profile)' | '(message)' | string;
    roleName?: '{established}' | '{freelancing}' | '{manager}' | '{employee}' | '{specialist}' | '{technician}' | string;
  };
}

const OvertimeLeftbar: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'expanded' | 'collapsed' = 'expanded';

  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'clocking';

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <NavigationClocking
          //--|🠊 <nav class="clocking-leftbar" /> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <TableClocking
          //--|🠊 <table class="clocking-leftbar" /> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />

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
