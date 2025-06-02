//--|🠊 Menu.overtime.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Menu.overtime.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from './Menu_overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
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
    pageName: string;
    blockName:
      | string
      | '<overlay>'
      | '<leftbar>'
      | '<rightbar>'
      | '<header>'
      | '<footer>'
      | '<main>';
  };
}
const MenuOvertime: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as string;
  const pageName = info.pageName as 'overtime';

  const handleOvertime = async () => {};

  useEffect(() => {}, [pageName, blockName]);

  // console.log(stripBrackets(blockName, '<>')); // returns "overlay"

  return (
    <menu className={`overtime-menu`}>
      <ol className={`${stripBrackets(blockName, '<>')}-list`}>
        {(function loadBlock() {
          switch (blockName) {
            case '<overlay>':
              return (
                <>
                  <li>Overlay content</li>
                </>
              );

            case '<leftbar>':
              return (
                <>
                  <li>Leftbar content</li>
                </>
              );

            case '<rightbar>':
              return (
                <>
                  <li>Rightbar content</li>
                </>
              );

            case '<header>':
              return (
                <>
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
                </>
              );
            case '<footer>':
              return (
                <>
                  <li>Footer content</li>
                </>
              );
            case '<main>':
            default:
              return (
                <>
                  <li>Main content</li>
                </>
              );
          }
        })()}
      </ol>
    </menu>
  );
};
export default MenuOvertime;
