//--|🠊 HyperlinkLeftbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';
import { loadAsset } from '../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: '[hyperlink]' | string;
    blockName: '<leftbar>' | string;
    labelName: '(default)' | string;
  };
}
function HyperlinkLeftbar({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'hyperlink';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟥|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}>
            <div className="lef"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}>
            <div className="lef"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default HyperlinkLeftbar;
