//--|🠊 List.scrolling.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './List.scrolling.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ButtonSharped from '../../Button/sharped/Button.sharped';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { defineButton, assignBlock, showWeek } from './List_scrolling';
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
const ListScrolling: React.FC<InfoProps> = ({ block, info }) => {
  const pageName = info.identification as 'overtime';
  const blockName: string = assignBlock(block) as 'header' | 'footer' | 'aside';

  useEffect(() => {}, [pageName, blockName]);

  switch (block) {
    case '<header>':
      return (
        <ol className="list-scrolling">
          <li className="prev-list">
            <ButtonSharped
              type="button"
              text={'Back'}
              onClick={() => showWeek('prev', pageName, blockName)}
              style={defineButton('prev-week', { pageName, blockName })}
            />
          </li>
        </ol>
      );
    case '<footer>':
      return (
        <ol className="list-scrolling">
          <li className="next-list">
            <ButtonSharped
              text={'Next'}
              type="button"
              onClick={() => showWeek('next', pageName, blockName)}
              style={defineButton('next-week', { pageName, blockName })}
            />
          </li>
        </ol>
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
export default ListScrolling;
