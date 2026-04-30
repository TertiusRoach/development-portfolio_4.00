//--|🠊 OvertimeMain.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';

//--|🠋 Components 🠋|--\\
import TableClocking from '../../../components/Table/clocking/Table.clocking';
import NavigationTracking from '../../../components/Navigation/Overtime/tracking/Navigation.tracking';

import WeekGrid from '../../../components/Aside/week/Aside.week-grid';
import DateString from '../../../components/Time/date-string/Time.date-string';
import BankTime from '../../../components/Article/bank-time/Article.bank-time';
import ClockCount from '../../../components/Time/clock-count/Time.clock-count';
import TotalTime from '../../../components/Article/total-time/Article.total-time';
import LeaveBreaks from '../../../components/Article/leave-breaks/Article.leave-breaks';
import TableTracking from '../../../components/Table/tracking/Table.tracking';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    labelName: '(default)' | '(tracking)' | '(clocking)' | '(request)' | '(profile)' | '(message)' | string;
    roleName?: '{established}' | '{freelancing}' | '{manager}' | '{employee}' | '{specialist}' | '{technician}' | string;
  };
}

const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const labelName = stripBrackets(info.labelName, '()') as 'tracking';

  let svgPath: Array<String> = ['', '', ''];

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <NavigationTracking
          //--|🠊 <nav class="tracking-main"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <TableTracking
          //--|🠊 <table class="tracking-main"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'tracking',
          }}
        />
        {/*
        <WeekGrid
          //--|🠊 <aside class="week-grid"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        */}
      </figure>
      <div className={`${blockName}-background`}>
        <LeaveBreaks
          //--|🠊 <article class="leave-breaks"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />

        <BankTime
          //--|🠊 <article class="bank-time"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />

        <DateString
          //--|🠊 <time class="date-string"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
          style={{
            shade: '~dark~',
          }}
        />

        <TotalTime
          //--|🠊 <article class="total-time"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <ClockCount
          //--|🠊 <time class="clock-count"/> 🠈|--\\
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
