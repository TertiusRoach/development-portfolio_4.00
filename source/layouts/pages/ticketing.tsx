//--|🠊 ticketing.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';
//--|🠋 Containers 🠋|--//
const TicketingMain = lazy(() => import('../containers/Main/TicketingMain/TicketingMain'));
const TicketingHeader = lazy(() => import('../containers/Header/TicketingHeader/TicketingHeader'));
const TicketingFooter = lazy(() => import('../containers/Footer/TicketingFooter/TicketingFooter'));

function Ticketing() {
  const [getMain, setMain] = useState(false);
  const [getHeader, setHeader] = useState(false);
  const [getFooter, setFooter] = useState(false);

  useEffect(() => {
    const overlayTimer = setTimeout(() => setHeader(true), 0);
    const leftbarTimer = setTimeout(() => setMain(true), 500);
    const rightbarTimer = setTimeout(() => setFooter(true), 500);

    const mainTimer = setTimeout(() => setMain(true), 750);
    const headerTimer = setTimeout(() => setHeader(true), 250);
    const footerTimer = setTimeout(() => setFooter(true), 250);
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(footerTimer);
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <>
      {/* <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <OvertimeHeader info={{ pageName: '[ticketing]', blockName: '<header>' }} />}
      </Suspense> */}

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <TicketingMain info={{ pageName: '[ticketing]', blockName: '<main>' }} />}
      </Suspense>

      {/* <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <OvertimeFooter info={{ pageName: '[ticketing]', blockName: '<footer>' }} />}
      </Suspense> */}
    </>
  );
}
export default Ticketing;
