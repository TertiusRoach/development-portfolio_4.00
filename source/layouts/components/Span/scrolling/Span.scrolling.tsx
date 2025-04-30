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
import ButtonSharped from '../../Button/stretch/Button.stretch';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, assignBlock, showWeek } from './Span_scrolling';
import { viewBlock, viewText, axiosError } from '../../../pages/landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  block: '<header>' | '<footer>' | '<aside>';
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
const SpanScrolling: React.FC<InfoProps> = ({ block, info }) => {
  const pageName = info.identification as 'overtime';
  const blockName: string = assignBlock(block) as 'header' | 'footer' | 'aside';

  useEffect(() => {}, [pageName, blockName]);

  switch (block) {
    case '<header>':
      return (
        <span className="span-scrolling">
          <ButtonSharped
            type="button"
            text={'Back'}
            onClick={() => showWeek('prev', pageName)}
            style={defineButton('prev-week', { pageName, blockName })}
          />
        </span>
      );
    case '<footer>':
      return (
        <span className="span-scrolling">
          <ButtonSharped
            text={'Next'}
            type="button"
            onClick={() => showWeek('next', pageName)}
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
