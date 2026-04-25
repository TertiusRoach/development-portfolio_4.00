//--|🠊 ComponentsLeftbar.tsx 🠈|--\\
import React, { useEffect } from 'react';
import { stripBrackets } from '../../../scripts/components';
import MenuCarousel from '../../../components/Menu/carousel/Menu.carousel';

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
const ComponentsLeftbar: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';

  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <MenuCarousel
          cases={{ axis: '[y]', link: 'elements-main', array: [''] }}
          style={{
            view: '-lef-',
            color: '(mono)',
            shade: '~light~',
            type: '{select}',
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        <h1 className="display-1">{`<ComponentsLeftbar>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ComponentsLeftbar;
