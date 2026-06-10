//--|🠊 Archive.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers 🠋|--\\
const ArchiveMain = lazy(() => import('./Main/ArchiveMain'));
const ArchiveHeader = lazy(() => import('./Header/ArchiveHeader'));
const ArchiveFooter = lazy(() => import('./Footer/ArchiveFooter'));

const ArchiveOverlay = lazy(() => import('./Overlay/ArchiveOverlay'));
const ArchiveLeftbar = lazy(() => import('./Leftbar/ArchiveLeftbar'));
const ArchiveRightbar = lazy(() => import('./Rightbar/ArchiveRightbar'));

function Archive() {
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
      <Suspense fallback={<div className="display-1">Loading Overlay...</div>}>
        {getOverlay && (
          <ArchiveOverlay info={{ pageName: '[components]', blockName: '<overlay>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <ArchiveLeftbar info={{ pageName: '[components]', blockName: '<leftbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Rightbar...</div>}>
        {getRightbar && (
          <ArchiveRightbar info={{ pageName: '[components]', blockName: '<rightbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <ArchiveHeader info={{ pageName: '[components]', blockName: '<header>', labelName: '(default)' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <ArchiveFooter info={{ pageName: '[components]', blockName: '<footer>', labelName: '(default)' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <ArchiveMain info={{ pageName: '[components]', blockName: '<main>', labelName: '(default)' }} />}
      </Suspense>
    </>
  );
}
export default Archive;
