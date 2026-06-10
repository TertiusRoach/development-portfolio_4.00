//--|🠊 hyperlink.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';
//--|🠋 Containers 🠋|--//
const HyperlinkMain = lazy(() => import('../containers/Hyperlink/Main/HyperlinkMain'));
const HyperlinkHeader = lazy(() => import('../containers/Hyperlink/Header/HyperlinkHeader'));
const HyperlinkFooter = lazy(() => import('../containers/Hyperlink/Footer/HyperlinkFooter'));

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
      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && <HyperlinkHeader info={{ pageName: '[hyperlink]', blockName: '<header>' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <HyperlinkMain info={{ pageName: '[hyperlink]', blockName: '<main>' }} />}
      </Suspense>

      {/* <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <HyperlinkFooter info={{ pageName: '[hyperlink]', blockName: '<footer>' }} />}
      </Suspense> */}
    </>
  );
}
export default Hyperlink;
