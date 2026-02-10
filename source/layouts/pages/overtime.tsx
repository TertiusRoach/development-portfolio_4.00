//--|🠊 overtime.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';
//--|🠋 Containers 🠋|--//
const OvertimeMain = lazy(() => import('../containers/Main/OvertimeMain/OvertimeMain'));
const OvertimeHeader = lazy(() => import('../containers/Header/OvertimeHeader/OvertimeHeader'));
const OvertimeFooter = lazy(() => import('../containers/Footer/OvertimeFooter/OvertimeFooter'));

function Overtime() {
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
      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <OvertimeHeader info={{ pageName: '[overtime]', blockName: '<header>' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <OvertimeMain info={{ pageName: '[overtime]', blockName: '<main>' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <OvertimeFooter info={{ pageName: '[overtime]', blockName: '<footer>' }} />}
      </Suspense>
    </>
  );
}
export default Overtime;

/*
function Overtime() {
  return (
    <>
      <Suspense fallback={<div className="display-1">Loading...</div>}>
        <OvertimeLeftbar info={{ pageName: '[overtime]', blockName: '<leftbar>' }} />
        <OvertimeHeader info={{ pageName: '[overtime]', blockName: '<header>' }} />

        <OvertimeRightbar info={{ pageName: '[overtime]', blockName: '<rightbar>' }} />
        <OvertimeFooter info={{ pageName: '[overtime]', blockName: '<footer>' }} />
      </Suspense>

      <OvertimeMain info={{ pageName: '[overtime]', blockName: '<main>' }} />
      <OvertimeOverlay info={{ pageName: '[overtime]', blockName: '<overlay>' }} />
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
*/
