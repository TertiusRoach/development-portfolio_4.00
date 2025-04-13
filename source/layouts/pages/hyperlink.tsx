//--|🠊 hyperlink.tsx 🠈|--//
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
import HyperlinkHeader from '../containers/Header/HyperlinkHeader/HyperlinkHeader';
import HyperlinkFooter from '../containers/Footer/HyperlinkFooter/HyperlinkFooter';
//--|🠉 Containers 🠉|--//
//--|🠋 Utilities 🠋|--//
import getResolution from '../../modules/tools/getResolution';
import getOrientation from '../../modules/tools/getOrientation';
import getIdentification from '../../modules/tools/getIdentification';
//--|🠉 Utilities 🠉|--//
function Hyperlink() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: 'hyperlink' as 'hyperlink',
  };

  return (
    <>
      {/* <HyperlinkHeader info={information} /> */}
      {/* <HyperlinkFooter info={information} /> */}
    </>
  );
}
export default Hyperlink;
