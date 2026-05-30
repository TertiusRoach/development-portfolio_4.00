//--|🠊 Navigation.default.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

interface TheseProps {
  info: {
    pageName: 'components' | 'landing' | 'overtime' | 'ticketing' | 'hyperlink';
    blockName: 'main' | 'header' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';
    labelName: 'default' | string;
  };
}
const NavigationDefault: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  switch (blockName) {
    case 'main':
      return <nav className={`${labelName}-${blockName}_navigation-default`}></nav>;
    case 'header':
      return <nav></nav>;
    case 'footer':
      return <nav></nav>;
    case 'overlay':
      return <nav></nav>;
    case 'leftbar':
      return <nav></nav>;
    case 'rightbar':
      return <nav></nav>;
  }
};
export default NavigationDefault;
