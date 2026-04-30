//--|🠊 Navigation.overtime.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Navigation.overtime.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { hideBlock } from '../../../pages/overtime';
import { defineButton, stripBrackets } from './Navigation_overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import TimeDaily from '../../Time/archive/daily/Time.daily';
import MenuFeatures from '../../Menu/features/Menu.features';
import NavigationPreview from '../preview/Navigation.preview';
import ButtonDefault from '../../Button/archive/default/Button.default';
import SpanScrolling from '../../Span/scrolling/Span.scrolling';
import SectionPreview from '../../Section/archive/preview/Section.preview';
import DivisionIdentity from '../../Division/identity/Division.identity';
//--|🠉 Components 🠉|--//
interface InfoProps {
  info: {
    pageName: string;
    blockName: string | '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>';
    stateName?: 'established' | 'freelancing';
  };
}
const NavigationOvertime: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as string;
  const pageName = info.pageName as 'overtime';

  const handleOvertime = (
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string,
  ) => {
    switch (blockName) {
      case '<overlay>':
        return <>{/* <li>Overlay content</li> */}</>;

      case '<leftbar>':
        return (
          <div className={`${stripBrackets(blockName, '<>')}-division`}>
            <ButtonDefault
              text={''}
              type="button"
              onClick={() => hideBlock('clocking')}
              style={defineButton('<leftbar>', {
                pageName,
                blockName: stripBrackets(blockName, '<>'),
              })}
            />
            {/* <h1>Leftbar content</h1> */}
          </div>
        );
      case '<rightbar>':
        return (
          <div className={`${stripBrackets(blockName, '<>')}-division`}>
            <h1>Rightbar content</h1>
          </div>
        );

      case '<header>':
        return <>{/* <li>Header content</li> */}</>;
      case '<footer>':
        return <>{/* <li>Footer content</li> */}</>;
      case '<main>':
      default:
        return <>{/* <li>Main content</li> */}</>;
    }
  };

  useEffect(() => {
    // handleOvertime();
  }, [pageName, blockName]);

  return <nav className={'overtime-navigation'}>{handleOvertime(blockName)}</nav>;
};
export default NavigationOvertime;
