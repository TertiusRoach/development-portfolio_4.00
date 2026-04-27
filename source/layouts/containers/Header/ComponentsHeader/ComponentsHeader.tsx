//--|🠊 ComponentsHeader.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/components';

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
const ComponentsHeader: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        {/* <MenuCarousel


        />
        <NavigationProfile
          //--|🠊 <nav class="profile-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        /> */}
        {/* <h1 className="display-1">{`<ComponentsHeader>`}</h1> */}
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default ComponentsHeader;
