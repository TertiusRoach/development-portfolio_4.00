//--|🠊 Menu.overtime.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.overtime.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton } from './Menu_overtime';
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonStretch from '../../Button/stretch/Button.stretch';

import TimeDaily from '../../../components/Time/daily/Time.daily';
import MenuFeatures from '../../../components/Menu/features/Menu.features';
import SpanScrolling from '../../../components/Span/scrolling/Span.scrolling';
import SectionPreview from '../../../components/Section/preview/Section.preview';
import DivisionIdentity from '../../../components/Division/identity/Division.identity';
import NavigationPreview from '../../../components/Navigation/preview/Navigation.preview';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}
const MenuOvertime: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as string;

  const handleOvertime = (blockName: 'overlay' | 'leftbar' | 'rightbar' | 'header' | 'footer' | 'main' | string) => {
    switch (blockName) {
      case 'header':
        console.log(defineButton(`${blockName}`, { pageName, blockName }));
        return (
          <>
            <li className="route-list">
              {/* <ButtonStretch style={defineButton(`${blockName}`, { pageName, blockName })} /> */}
            </li>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li className="identity-list">
              <DivisionIdentity info={info} />
            </li>
            <li className="daily-list">
              <TimeDaily info={info} />
            </li>
            <li className="scrolling-list">
              <SpanScrolling block={blockName} info={info} />
            </li>
            <li className="preview-list">
              <NavigationPreview info={info} />
            </li>
            </ul> */}
          </>
        );
      case 'footer':
        return (
          <>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li className="scrolling-list">
              <SpanScrolling block={blockName} info={info} />
            </li>
            </ul> */}
          </>
        );
      case 'overlay':
        return (
          <>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li>Overlay content</li>
            </ul> */}
          </>
        );

      case 'leftbar':
        return (
          <>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li>Leftbar content</li>
            </ul> */}
          </>
        );

      case 'rightbar':
        return (
          <>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li>Rightbar content</li>
            </ul> */}
          </>
        );
      case 'main':
      default:
        return (
          <>
            {/* <ul className={`${stripBrackets(blockName, '<>')}-list`}>
              <li>Main content</li>
            </ul> */}
          </>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return <menu className={`overtime-menu ${stripBrackets(blockName, '<>')}`}>{handleOvertime(blockName)}</menu>;
};
export default MenuOvertime;
