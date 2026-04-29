//--|🠊 ComponentsHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/components';

//--|🠋 Components 🠋|--\\
import MenuCarousel from '../../../components/Menu/carousel/Menu.carousel';
import NavigationBrowse from '../../../components/Navigation/browse/Navigation.browse';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

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
  const svgPath: Array<string> = ['<Default_Button>', '<Routing_Button>', '<Profile_Button>', '<Stretch_Button>'];

  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'browse';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'unfolded';
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <NavigationBrowse
          //--|🠊 <nav class="browse-header"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
        <header className="component-carousels">
          <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{ paths: svgPath as Array<string | HTMLElement | any> }}
            info={{
              labelName: 'button',
              blockName: blockName as '<leftbar>',
              pageName: pageName as '[components]',
            }}
          />
        </header>

        {/* <h1 className="display-1">{`<ComponentsHeader>`}</h1> */}
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </header>
  );
};
export default ComponentsHeader;
