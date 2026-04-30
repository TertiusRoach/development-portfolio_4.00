//--|🠊 buttons.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';
//--|🠋 Containers 🠋|--//
const ButtonsMain = lazy(() => import('../containers/Buttons/Main/ButtonsMain'));
const ButtonsHeader = lazy(() => import('../containers/Buttons/Header/ButtonsHeader'));
const ButtonsFooter = lazy(() => import('../containers/Buttons/Footer/ButtonsFooter'));

function Buttons() {
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
        {getHeader && <ButtonsHeader info={{ pageName: '[buttons]', blockName: '<header>' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <ButtonsMain info={{ pageName: '[buttons]', blockName: '<main>' }} />}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && <ButtonsFooter info={{ pageName: '[buttons]', blockName: '<footer>' }} />}
      </Suspense>
    </>
  );
}
export default Buttons;
