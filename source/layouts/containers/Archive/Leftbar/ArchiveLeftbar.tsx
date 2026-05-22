//--|🠊 ArchiveLeftbar.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { selectHeader } from './ArchiveFunctions';
import { stripBrackets } from '../../../scripts/archive';

//--|🠋 Components 🠋|--\\
import MenuCarousel from '../../../components/Menu/archive/carousel/Menu.carousel';

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
const ArchiveLeftbar: React.FC<InfoProps> = ({ info }) => {
  // const svgPath: Array<string> = ;
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'collapsed';
  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <MenuCarousel
          style={{
            axis: '[y]',
            view: '-lef-',
            color: '(mono)',
            shade: '~light~',
            type: '{select}',
          }}
          cases={{
            paths: [
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/button-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/article-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/aside-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/division-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/figure-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/menu-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/navigation-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/section-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/table-element.svg',
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page/time-element.svg',
            ] as Array<string | HTMLElement>,
          }}
          info={{
            labelName: 'elements',
            blockName: blockName as '<leftbar>',
            pageName: pageName as '[components]',
          }}
        />
        <h1 className="display-1">{`<ComponentsLeftbar>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ArchiveLeftbar;
