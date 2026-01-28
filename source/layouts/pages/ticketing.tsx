//--|🠊 ticketing.tsx 🠈|--//
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
import TicketingHeader from '../containers/Header/TicketingHeader/TicketingHeader';
import TicketingFooter from '../containers/Footer/TicketingFooter/TicketingFooter';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../modules/tools/getResolution';
import getOrientation from '../../modules/tools/getOrientation';
import getIdentification from '../../modules/tools/getIdentification';
//--|🠉 Utilities 🠉|--//
function Ticketing() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: 'ticketing' as 'ticketing',
  };

  return (
    <>
      {/* <TicketingHeader info={information} /> */}
      {/* <TicketingFooter info={information} /> */}
    </>
  );
}
export default Ticketing;
