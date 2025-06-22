//--|🠊 landing.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--//
import React, { Suspense, lazy } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Containers 🠋|--//
const ButtonsMain = lazy(() => import('../containers/Main/ButtonsMain/ButtonsMain'));
const ButtonsHeader = lazy(() => import('../containers/Header/ButtonsHeader/ButtonsHeader'));
const ButtonsFooter = lazy(() => import('../containers/Footer/ButtonsFooter/ButtonsFooter'));
//--|🠉 Containers 🠉|--//

function Buttons() {
  return (
    <Suspense fallback={<div className="display-1">Loading...</div>}>
      <ButtonsHeader info={{ pageName: '[buttons]', blockName: '<header>' }} />
      <ButtonsMain info={{ pageName: '[buttons]', blockName: '<main>' }} />
      <ButtonsFooter info={{ pageName: '[buttons]', blockName: '<footer>' }} />
    </Suspense>
  );
}
export default Buttons;
