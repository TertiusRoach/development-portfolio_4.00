//--|🠊 Ticketing.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers 🠋|--\\
const TicketingMain = lazy(() => import('./Main/TicketingMain'));
const TicketingHeader = lazy(() => import('./Header/TicketingHeader'));
const TicketingFooter = lazy(() => import('./Footer/TicketingFooter'));
/*

const TicketingOverlay = lazy(() => import('./Overlay/TicketingOverlay'));
const TicketingLeftbar = lazy(() => import('./Leftbar/TicketingLeftbar'));
const TicketingRightbar = lazy(() => import('./Rightbar/TicketingRightbar'));
*/

function Ticketing() {
  const [getMain, setMain] = useState(false);
  const [getHeader, setHeader] = useState(false);
  const [getFooter, setFooter] = useState(false);

  const [getOverlay, setOverlay] = useState(false);
  const [getLeftbar, setLeftbar] = useState(false);
  const [getRightbar, setRightbar] = useState(false);

  useEffect(() => {
    //--|🠋 Contains the Asynchronous References 🠋|--\\
    const overlayTimer = setTimeout(() => setOverlay(true), 0 * 0); //--|🠈 Must Load First and not allowed to reference <Main>. 🠈|--\\
    const mainTimer = setTimeout(() => setMain(true), 250 * 1); //--|🠈 Must Load First and not allowed to reference <Overlay>. 🠈|--\\

    const headerTimer = setTimeout(() => setHeader(true), 250 * 2); //--|🠈 References <Main> block container. 🠈|--\\
    const footerTimer = setTimeout(() => setFooter(true), 250 * 2); //--|🠈 References <Main> block container. 🠈|--\\

    const leftbarTimer = setTimeout(() => setLeftbar(true), 250 * 3); //--|🠈 References <Main> block container. 🠈|--\\
    const rightbarTimer = setTimeout(() => setRightbar(true), 250 * 3); //--|🠈 References <Main> block container. 🠈|--\\
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(footerTimer);
      clearTimeout(mainTimer);

      clearTimeout(overlayTimer);
      clearTimeout(leftbarTimer);
      clearTimeout(rightbarTimer);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <TicketingMain info={{ pageName: '[ticketing]', blockName: '<main>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <TicketingHeader info={{ pageName: '[ticketing]', blockName: '<header>', labelName: '(default)' }} />}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <TicketingFooter info={{ pageName: '[ticketing]', blockName: '<footer>', labelName: '(default)' }} />}
      </Suspense>
      {/* <Suspense fallback={<div className="display-1">Loading Overlay...</div>}>
        {getOverlay && (
          <TicketingOverlay info={{ pageName: '[overtime]', blockName: '<overlay>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <TicketingLeftbar info={{ pageName: '[overtime]', blockName: '<leftbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Rightbar...</div>}>
        {getRightbar && (
          <TicketingRightbar info={{ pageName: '[overtime]', blockName: '<rightbar>', labelName: '(default)' }} />
        )}
      </Suspense>





 */}
    </>
  );
}
export default Ticketing;
