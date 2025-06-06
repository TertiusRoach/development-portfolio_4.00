//--|🠊 OvertimeHeader.tsx 🠈|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/overtime';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Components 🠋|--//
import MenuOvertime from '../../../components/Menu/overtime/Menu.overtime';
import SectionPreview from '../../../components/Section/preview/Section.preview';
//--|🠉 Components 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const OvertimeHeader: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'overtime';
  const blockName = stripBrackets(info.blockName, '<>') as 'header';

  const stateName: 'expanded' | 'collapsed' = 'collapsed';
  useEffect(() => {}, [pageName, blockName]);

  return (
    <header style={{ zIndex: 2 }} id={`${pageName}-${blockName}`} className={`default-${blockName} ${stateName}`}>
      <MenuOvertime info={{ pageName, blockName: '<header>' }} />

      <SectionPreview info={info} />
    </header>
  );
};
export default OvertimeHeader;
