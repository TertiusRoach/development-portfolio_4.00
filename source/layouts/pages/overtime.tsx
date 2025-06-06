//--|🠊 overtime.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Containers 🠋|--//
import OvertimeMain from '../containers/Main/OvertimeMain/OvertimeMain';
import OvertimeHeader from '../containers/Header/OvertimeHeader/OvertimeHeader';
import OvertimeFooter from '../containers/Footer/OvertimeFooter/OvertimeFooter';

import OvertimeOverlay from '../containers/Overlay/OvertimeOverlay/OvertimeOverlay';
import OvertimeLeftbar from '../containers/Leftbar/OvertimeLeftbar/OvertimeLeftbar';
// import OvertimeRightbar from '../containers/Rightbar/OvertimeRightbar/OvertimeRightbar';
//--|🠉 Containers 🠉|--//
function Overtime() {
  return (
    <>
      <Suspense fallback={<div className="display-1">Loading...</div>}>
        <OvertimeLeftbar info={{ pageName: '[overtime]', blockName: '<leftbar>' }} />
        <OvertimeHeader info={{ pageName: '[overtime]', blockName: '<header>' }} />

        {/* <OvertimeRightbar info={{ pageName: '[overtime]', blockName: '<rightbar>' }} /> */}
        {/* <OvertimeFooter info={{ pageName: '[overtime]', blockName: '<footer>' }} /> */}
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
