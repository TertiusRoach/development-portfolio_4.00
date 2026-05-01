//--|🠊 ArchiveFooter.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/archive';

import ArchiveNavigation from '../../../components/Navigation/Archive/Navigation.archive';

interface InfoProps {
  info: {
    //--|🠋 pageName: Id that represents the application 🠋|--\\
    pageName: '[components]';
    //--|🠋 blockName: 'Toggles between '/containers' folders. 🠋|--\\
    blockName: '<footer>' | '<header>' | '<leftbar>' | '<main>' | '<overlay>' | '<rightbar>';
    //--|🠋 labelName: Class name marker for all components. 🠋|--\\
    labelName: '(default)' | string;
  };
}
const ArchiveFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'unfolded';

  useEffect(() => {}, [pageName, blockName]);

  let labelName = stripBrackets(info.labelName, '()') as 'default';
  return (
    <footer id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <footer></footer>
        <ArchiveNavigation
          //--|🠊 <nav className={`${pageName}-footer_${labelName}`}> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<ComponentsFooter>`}</h1>
      </div>
    </footer>
  );
};
export default ArchiveFooter;
