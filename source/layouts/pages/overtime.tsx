//--|🠊 overtime.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../../modules/context/EmailContext';
import { PasswordProvider } from '../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import OvertimeMain from '../containers/Main/OvertimeMain/OvertimeMain';
import OvertimeHeader from '../containers/Header/OvertimeHeader/OvertimeHeader';
import OvertimeFooter from '../containers/Footer/OvertimeFooter/OvertimeFooter';

import OvertimeLeftbar from '../containers/Leftbar/OvertimeLeftbar/OvertimeLeftbar';
import OvertimeOverlay from '../containers/Overlay/OvertimeOverlay/OvertimeOverlay';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../modules/tools/getResolution';
import getOrientation from '../../modules/tools/getOrientation';
import getIdentification from '../../modules/tools/getIdentification';
//--|🠉 Utilities 🠉|--//
function Overtime() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: 'overtime' as 'overtime',
  };
  return (
    <>
      <OvertimeOverlay info={information} />
      <OvertimeLeftbar
        info={{ pageName: information.identification, blockName: '<leftbar>' }}
      />

      <OvertimeHeader info={information} />
      <OvertimeMain info={information} />
      <OvertimeFooter info={information} />
    </>
  );
}
export default Overtime;

export function viewBlock(page: 'clocking' | 'leaving') {
  const rightbar = document.getElementById('overtime-rightbar') as HTMLElement;
  const leftbar = document.getElementById('overtime-leftbar') as HTMLElement;

  switch (page) {
    case 'clocking':
      leftbar.className = 'default-leftbar expanded'; //--|🠈 Show Verify 🠈|--//
      break;
    case 'leaving':
      break;
  }
}
export function hideBlock(page: 'clocking' | 'leaving') {
  const rightbar = document.getElementById('overtime-rightbar') as HTMLElement;
  const leftbar = document.getElementById('overtime-leftbar') as HTMLElement;

  switch (page) {
    case 'clocking':
      leftbar.className = 'default-leftbar collapsed'; //--|🠈 Show Verify 🠈|--//
      break;
    case 'leaving':
      break;
  }
}
