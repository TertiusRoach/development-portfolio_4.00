//--|🠊 Span.scrolling.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Span.scrolling.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonStretch from '../../Button/stretch/Button.stretch';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, traceBlock, showWeek, alterWeek } from './Span_scrolling';
import { viewBlock, viewText, axiosError } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  block: '<header>' | '<footer>' | '<aside>';
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification:
      | 'index'
      | 'resume'
      | 'ticket'
      | 'university'
      | 'fitness'
      | 'landing'
      | string;
  };
}
const SpanScrolling: React.FC<InfoProps> = ({ block, info }) => {
  const pageName = info.identification as 'overtime';
  const blockName: string = traceBlock(block) as 'header' | 'footer' | 'aside';

  useEffect(() => {}, [pageName, blockName]);

  switch (block) {
    case '<header>':
      return (
        <span className="span-scrolling">
          <ButtonStretch
            type="button"
            text={'Back'}
            onClick={() => showWeek(pageName, '<y>', '-prev-')}
            style={defineButton('prev-week', { pageName, blockName })}
          />
        </span>
      );
    case '<footer>':
      return (
        <span className="span-scrolling">
          <ButtonStretch
            text={'Next'}
            type="button"
            onClick={() => {
              // fillWeek(pageName, blockName);
              showWeek(pageName, '<y>', '-next-');
            }}
            style={defineButton('next-week', { pageName, blockName })}
          />
        </span>
      );
    case '<aside>':
      return (
        <ol className="list-overtime">
          <li className="prev-month">{/* <button></button> */}</li>
          <li className="next-month">{/* <button></button> */}</li>
        </ol>
      );
  }
};
export default SpanScrolling;
