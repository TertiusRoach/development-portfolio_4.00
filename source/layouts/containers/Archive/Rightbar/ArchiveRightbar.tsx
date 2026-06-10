//--|🠊 ArchiveRightbar.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/archive';

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
const ArchiveRightbar: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'collapsed';

  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const blockName = stripBrackets(info.blockName, '<>') as 'rightbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<ComponentsRightbar>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ArchiveRightbar;
