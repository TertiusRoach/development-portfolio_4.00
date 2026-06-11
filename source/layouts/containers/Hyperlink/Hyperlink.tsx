//--|🠊 Hyperlink.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers 🠋|--\\
const HyperlinkMain = lazy(() => import('./Main/HyperlinkMain'));
// const HyperlinkHeader = lazy(() => import('./Header/HyperlinkHeader'));
// const HyperlinkFooter = lazy(() => import('./Footer/HyperlinkFooter'));

// const HyperlinkOverlay = lazy(() => import('./Overlay/HyperlinkOverlay'));
// const HyperlinkLeftbar = lazy(() => import('./Leftbar/HyperlinkLeftbar'));
// const HyperlinkRightbar = lazy(() => import('./Rightbar/HyperlinkRightbar'));

function Hyperlink() {
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
        {getMain && <HyperlinkMain info={{ pageName: '[hyperlink]', blockName: '<main>', labelName: '(default)' }} />}
      </Suspense>

      {/*
      <Suspense fallback={<div className="display-1">Loading Overlay...</div>}>
        {getOverlay && (
          <HyperlinkOverlay info={{ pageName: '[overtime]', blockName: '<overlay>', labelName: '(default)' }} />
        )}
      </Suspense>
      
      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <HyperlinkLeftbar info={{ pageName: '[overtime]', blockName: '<leftbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Rightbar...</div>}>
        {getRightbar && (
          <HyperlinkRightbar info={{ pageName: '[overtime]', blockName: '<rightbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <HyperlinkHeader info={{ pageName: '[overtime]', blockName: '<header>', labelName: '(default)' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <HyperlinkFooter info={{ pageName: '[overtime]', blockName: '<footer>', labelName: '(default)' }} />}
      </Suspense>

 */}
    </>
  );
}
export default Hyperlink;
