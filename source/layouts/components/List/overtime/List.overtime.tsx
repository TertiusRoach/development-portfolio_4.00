//--|🠊 List.overtime.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './List.overtime.scss';
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
import { assignBlock } from './List_overtime';
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

const ListOvertime: React.FC<InfoProps> = ({ block, info }) => {
  const blockName: string = assignBlock(block) as 'header' | 'footer' | 'aside';
  const pageName = info.identification;

  useEffect(() => {}, [pageName, blockName]);

  switch (block) {
    case '<header>':
      return (
        <ol className="list-overtime">
          <li className="back">{/* <button></button> */}</li>
        </ol>
      );
    case '<footer>':
      return (
        <ol className="list-overtime">
          <li className="next">{/* <button></button> */}</li>
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
export default ListOvertime;
