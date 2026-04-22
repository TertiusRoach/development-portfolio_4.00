//--|🠊 components.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy, useState, useEffect } from 'react';

//--|🠋 Containers 🠋|--//
const ComponentsMain = lazy(() => import('../containers/Main/ComponentsMain/ComponentsMain'));
const ComponentsHeader = lazy(() => import('../containers/Header/ComponentsHeader/ComponentsHeader'));
const ComponentsFooter = lazy(() => import('../containers/Footer/ComponentsFooter/ComponentsFooter'));

const ComponentsOverlay = lazy(() => import('../containers/Overlay/ComponentsOverlay/ComponentsOverlay'));
const ComponentsLeftbar = lazy(() => import('../containers/Leftbar/ComponentsLeftbar/ComponentsLeftbar'));
const ComponentsRightbar = lazy(() => import('../containers/Rightbar/ComponentsRightbar/ComponentsRightbar'));

function Components() {
  const [getMain, setMain] = useState(false);
  const [getHeader, setHeader] = useState(false);
  const [getFooter, setFooter] = useState(false);

  const [getOverlay, setOverlay] = useState(false);
  const [getLeftbar, setLeftbar] = useState(false);
  const [getRightbar, setRightbar] = useState(false);

  useEffect(() => {
    const mainTimer = setTimeout(() => setMain(true), 250);
    const headerTimer = setTimeout(() => setHeader(true), 750);
    const footerTimer = setTimeout(() => setFooter(true), 750);

    const overlayTimer = setTimeout(() => setOverlay(true), 0);
    const leftbarTimer = setTimeout(() => setLeftbar(true), 750);
    const rightbarTimer = setTimeout(() => setRightbar(true), 750);
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
      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <ComponentsOverlay info={{ pageName: '[components]', blockName: '<overlay>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Leftbar...</div>}>
        {getLeftbar && (
          <ComponentsLeftbar info={{ pageName: '[components]', blockName: '<leftbar>', labelName: '(default)' }} />
        )}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Rightbar...</div>}>
        {getRightbar && (
          <ComponentsRightbar info={{ pageName: '[components]', blockName: '<rightbar>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Header...</div>}>
        {getHeader && (
          <ComponentsHeader info={{ pageName: '[components]', blockName: '<header>', labelName: '(default)' }} />
        )}
      </Suspense>
      <Suspense fallback={<div className="display-1">Loading Footer...</div>}>
        {getFooter && (
          <ComponentsFooter info={{ pageName: '[components]', blockName: '<footer>', labelName: '(default)' }} />
        )}
      </Suspense>

      <Suspense fallback={<div className="display-1">Loading Main...</div>}>
        {getMain && <ComponentsMain info={{ pageName: '[components]', blockName: '<main>', labelName: '(default)' }} />}
      </Suspense>
    </>
  );
}
export default Components;
