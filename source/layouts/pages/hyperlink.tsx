//--|🠊 source/script/hyperlink.tsx 🠈|--//
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
      {/* <EmailProvider>
        <PasswordProvider>
          <LandingOverlay info={information} />

          <LandingHeader info={information} />

          <LandingLeftbar info={information} />
          <LandingMain info={information} />
          <LandingRightbar info={information} />

          <LandingFooter info={information} />
        </PasswordProvider>
      </EmailProvider> */}
    </>
  );
}
export default Hyperlink;
