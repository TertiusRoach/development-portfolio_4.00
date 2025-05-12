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
    orientation: 'desktop-landscape' | 'mobile-portrait' | string;
    identification: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;
  };
}
const SpanScrolling: React.FC<InfoProps> = ({ block, info }) => {
  const pageName = info.identification as 'overtime';
  const blockName = traceBlock(block) as 'header' | 'footer' | 'aside';

  const [layout, setLayout] = useState<React.ReactNode>(null);

  const handleScrolling = (pageName: string, blockName: string) => {
    let buttonLayout = (blockName: string) => {
      switch (blockName) {
        case 'header':
          return (
            <ButtonStretch
              type="button"
              text={'Back'}
              onClick={() => showWeek(pageName, '<y>', '-prev-')}
              style={defineButton('prev-week', { pageName, blockName })}
            />
          );
        case 'footer':
          return (
            <ButtonStretch
              text={'Next'}
              type="button"
              onClick={() => {
                showWeek(pageName, '<y>', '-next-');
              }}
              style={defineButton('next-week', { pageName, blockName })}
            />
          );
        case 'aside':
          return (
            <>
              <ButtonStretch
                type="button"
                text={'Back'}
                onClick={() => {
                  showWeek(pageName, '<x>', '-prev-');
                }}
                style={defineButton('prev-month', { pageName, blockName })}
              />
              <ButtonStretch
                type="button"
                text={'Next'}
                onClick={() => {
                  showWeek(pageName, '<x>', '-next-');
                }}
                style={defineButton('next-month', { pageName, blockName })}
              />
            </>
          );
      }
    };

    setLayout(buttonLayout(blockName));
  };

  useEffect(() => {
    handleScrolling(pageName, blockName);
  }, [pageName, blockName]);

  return <span className="span-scrolling">{layout}</span>;
};
export default SpanScrolling;
