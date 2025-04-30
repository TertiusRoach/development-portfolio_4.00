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
      <OvertimeHeader info={information} />
      <OvertimeMain info={information} />
      <OvertimeFooter info={information} />
    </>
  );
}
export default Overtime;
