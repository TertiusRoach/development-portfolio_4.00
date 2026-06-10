//--|🠊 overtime.tsx 🠈|--\\
/*
//--|🠋 Dependencies 🠋|--\\
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers 🠋|--//
const OvertimeMain = lazy(() => import('../containers/Overtime/Main/OvertimeMain'));
const OvertimeHeader = lazy(() => import('../containers/Overtime/Header/OvertimeHeader'));
const OvertimeFooter = lazy(() => import('../containers/Overtime/Footer/OvertimeFooter'));
const OvertimeLeftbar = lazy(() => import('../containers/Overtime/Leftbar/OvertimeLeftbar'));

function Overtime() {
  const [getMain, setMain] = useState(false);
  const [getHeader, setHeader] = useState(false);
  const [getFooter, setFooter] = useState(false);
  const [getLeftbar, setLeftbar] = useState(false);

  useEffect(() => {
    const overlayTimer = setTimeout(() => setHeader(true), 0);
    const leftbarTimer = setTimeout(() => setLeftbar(true), 500);
    const rightbarTimer = setTimeout(() => setFooter(true), 500);

    const mainTimer = setTimeout(() => setMain(true), 750);
    const headerTimer = setTimeout(() => setHeader(true), 250);
    const footerTimer = setTimeout(() => setFooter(true), 250);
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(footerTimer);
      clearTimeout(mainTimer);

      clearTimeout(leftbarTimer);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <OvertimeHeader info={{ pageName: '[overtime]', blockName: '<header>', labelName: '(profile)' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <OvertimeMain info={{ pageName: '[overtime]', blockName: '<main>', labelName: '(tracking)' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <OvertimeLeftbar info={{ pageName: '[overtime]', blockName: '<leftbar>', labelName: '(clocking)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <OvertimeFooter info={{ pageName: '[overtime]', blockName: '<footer>' }} />}
      </Suspense>
    </>
  );
}
export default Overtime;
*/
