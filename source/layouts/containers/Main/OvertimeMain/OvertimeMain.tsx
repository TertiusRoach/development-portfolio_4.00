//--|🠊 OvertimeMain.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import TableWeeks from '../../../components/Table/weeks/Table.weeks';
import ArticleLeave from '../../../components/Article/leave/Article.leave';
import ButtonStretch from '../../../components/Button/archive/stretch/Button.stretch';
import NavigationWeeks from '../../../components/Navigation/weeks/Navigation.weeks';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const OvertimeMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  let svgPath: Array<String> = ['', '', ''];

  return (
    <main id={`${pageName}-${blockName}`} className={`default-${blockName}`} style={{ zIndex: 0 }}>
      <section className={`${blockName}-foreground`}>
        <header className="default-header"></header>
        <nav className="default-navigation"></nav>
        <div className="default-division"></div>
      </section>
      <figure className={`${blockName}-midground`}>
        <aside className="left-side downplay"></aside>
        <aside className="right-side downplay"></aside>
      </figure>
      <div className={`${blockName}-background`}>
        <header></header>
        <aside className="left-side downplay"></aside>
        <aside className="right-side downplay"></aside>
        <footer></footer>
      </div>
    </main>
  );
};
export default OvertimeMain;
