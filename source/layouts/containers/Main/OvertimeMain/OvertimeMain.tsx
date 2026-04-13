//--|🠊 OvertimeMain.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/overtime';
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';
//--|🠋 Components 🠋|--\\
import TableWeeks from '../../../components/Table/archive/weeks/Table.weeks';
import ButtonDefault from '../../../components/Button/default/Button.default';
import ArticleLeave from '../../../components/Article/archive/leave/Article.leave';
import ButtonStretch from '../../../components/Button/archive/stretch/Button.stretch';
import NavigationWeeks from '../../../components/Navigation/archive/weeks/Navigation.weeks';

//--|===|--\\
import WeekGrid from '../../../components/Aside/week-grid/Aside.week-grid';
import DateString from '../../../components/Time/date-string/Time.date-string';
import BankTime from '../../../components/Article/bank-time/Article.bank-time';
import ClockCount from '../../../components/Time/clock-count/Time.clock-count';
import TotalTime from '../../../components/Article/total-time/Article.total-time';
import LeaveBreaks from '../../../components/Article/leave-breaks/Article.leave-breaks';
import TrackWeek from '../../../components/Table/track-week/Table.track-week';
import TrackMain from '../../../components/Navigation/track-main/Navigation.track-main';

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

  let svgPath: Array<String> = ['', '', ''];

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <TrackMain
          //--|🠊 <nav class="track-main"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <TrackWeek
          //--|🠊 <table class="track-week"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <WeekGrid
          //--|🠊 <aside class="week-grid"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
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
