//--|🠊 hyperlink.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';
//--|🠋 Containers 🠋|--//
const HyperlinkMain = lazy(() => import('../containers/Main/HyperlinkMain/HyperlinkMain'));
const HyperlinkHeader = lazy(() => import('../containers/Header/HyperlinkHeader/HyperlinkHeader'));
const HyperlinkFooter = lazy(() => import('../containers/Footer/HyperlinkFooter/HyperlinkFooter'));

function Hyperlink() {
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
        {getHeader && <OvertimeHeader info={{ pageName: '[hyperlink]', blockName: '<header>' }} />}
      </Suspense> */}

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <HyperlinkMain info={{ pageName: '[hyperlink]', blockName: '<main>' }} />}
      </Suspense>

      {/* <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <OvertimeFooter info={{ pageName: '[hyperlink]', blockName: '<footer>' }} />}
      </Suspense> */}
    </>
  );
}
export default Hyperlink;
