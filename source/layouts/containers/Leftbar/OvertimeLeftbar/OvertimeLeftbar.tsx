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

const OvertimeLeftbar: React.FC<InfoProps> = ({ info }) => {
  const labelName = 'clocking' as string;
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const stateName: 'expanded' | 'collapsed' = 'collapsed';

  let svgPath: Array<String> = ['', '', ''];

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}></section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default OvertimeLeftbar;
