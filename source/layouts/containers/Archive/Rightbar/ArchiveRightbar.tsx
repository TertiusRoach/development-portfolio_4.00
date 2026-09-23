//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';

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

function ArchiveRightbar({ info }: InfoProps): JSX.Element {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait'); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let pageName = stripBrackets(info.pageName, '[]') as 'components';
  let blockName = stripBrackets(info.blockName, '<>') as 'rightbar';
  let labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'collapsed';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <MenuSelect
              info={{
                blockName: blockName as 'main',
                labelName: 'elements' as string,
                pageName: pageName as 'components',
              }}
              style={{
                size: '<h4>',
                align: '-bot-',
                view: 'mid-rig',
                color: '(mono)',
                shade: '~light~',
                image: [
                  loadAsset('-svg-', '/project-pages/components-page/article-element'),
                  loadAsset('-svg-', '/project-pages/components-page/aside-element'),
                  loadAsset('-svg-', '/project-pages/components-page/button-element'),
                  loadAsset('-svg-', '/project-pages/components-page/division-element'),
                  loadAsset('-svg-', '/project-pages/components-page/figure-element'),
                  loadAsset('-svg-', '/project-pages/components-page/menu-element'),
                  loadAsset('-svg-', '/project-pages/components-page/navigation-element'),
                  loadAsset('-svg-', '/project-pages/components-page/section-element'),
                  loadAsset('-svg-', '/project-pages/components-page/table-element'),
                  loadAsset('-svg-', '/project-pages/components-page/time-element'),
                ],
              }}
              cases={{
                pages: 10,
                axis: '[y]',
                mark: ['article', 'aside', 'button', 'division', 'figure', 'menu', 'navigation', 'section', 'table', 'time'] as Array<string>,
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ArchiveRightbar;
