//--|🠊 OvertimeMain.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import WeekGrid from '../../../components/Aside/week-grid/Aside.week-grid';
import DateString from '../../../components/Time/date-string/Time.date-string';
import BankTime from '../../../components/Article/bank-time/Article.bank-time';
import LeaveBreaks from '../../../components/Article/leave-breaks/Article.leave-breaks';

//--|===|--\\
import TableWeeks from '../../../components/Table/weeks/Table.weeks';
import ArticleLeave from '../../../components/Article/archive/leave/Article.leave';
import ButtonStretch from '../../../components/Button/archive/stretch/Button.stretch';
import NavigationWeeks from '../../../components/Navigation/weeks/Navigation.weeks';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const labelName = 'report' as string;
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';

  // console.log(labelName);

  let svgPath: Array<String> = ['', '', ''];

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <nav className="default-navigation"></nav>
        {/* <header className="default-header"></header> */}
        {/* <div className="default-division"></div> */}
      </section>
      <figure className={`${blockName}-midground`}>
        <WeekGrid
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </figure>
      <div className={`${blockName}-background`}>
        <DateString
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <BankTime
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <LeaveBreaks
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </div>
    </main>
  );
};
export default OvertimeMain;
