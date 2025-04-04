//--|🠊 source/script/overtime.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import ReactDOM from 'react-dom/client';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { EmailProvider } from '../modules/context/EmailContext';
import { PasswordProvider } from '../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Containers 🠋|--//
import OvertimeHeader from '../layouts/containers/Header/OvertimeHeader/OvertimeHeader';
import OvertimeFooter from '../layouts/containers/Footer/OvertimeFooter/OvertimeFooter';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../modules/utilities/getResolution';
import getOrientation from '../modules/utilities/getOrientation';
import getIdentification from '../modules/utilities/getIdentification';
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
      {/* <OvertimeFooter info={information} /> */}
    </>
  );
}
export default Overtime;
