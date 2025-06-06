//--|🠊 Menu.overtime.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.overtime.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Components 🠋|--//
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
      case 'overlay':
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            <li>Overlay content</li>
          </ol>
        );

      case 'leftbar':
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            <li>Leftbar content</li>
          </ol>
        );

      case 'rightbar':
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            <li>Rightbar content</li>
          </ol>
        );

      case 'header':
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            {/* <li className="identity-list">
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
            </li> */}
          </ol>
        );
      case 'footer':
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            {/* <li className="scrolling-list">
              <SpanScrolling block={blockName} info={info} />
            </li> */}
          </ol>
        );
      case 'main':
      default:
        return (
          <ol className={`${stripBrackets(blockName, '<>')}-list`}>
            <li>Main content</li>
          </ol>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return <menu className={'overtime-menu'}>{handleOvertime(blockName)}</menu>;
};
export default MenuOvertime;
