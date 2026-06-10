//--|🠊 ArchiveOverlay.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { hideOverlay } from '../../../../scripts';
import { stripBrackets } from '../../../scripts/archive';

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import FigureLoading from '../../../components/Figure/loading/Figure.loading';

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
const ArchiveOverlay: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'hidden' | 'visible' = 'visible';

  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    setTimeout(() => {
      hideOverlay(pageName, blockName);
    }, 3000);
  }, [pageName, blockName]);

  return (
    <section id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <FigureLoading
          style={{
            shade: '~lig~',
          }}
          cases={{
            logo: 'signature',
          }}
          info={{
            pageName: pageName,
            blockName: blockName,
          }}
        />
        {/* <h1 className="display-1">{`<ComponentsOverlay>`}</h1> */}
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </section>
  );
};
export default ArchiveOverlay;
