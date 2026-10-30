//--|🠊 ArchiveRightbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';

//--|🠋 Styles 🠋|--\\

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
function ArchiveRightbar({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'rightbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName]);

  let blurName = 'obnubilate' as string;
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
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
                shade: '~dark~',
                image: [
                  loadAsset('-svg-', '/project-pages/components-page/article-element'),
                  loadAsset('-svg-', '/project-pages/components-page/aside-element'),
                  loadAsset('-svg-', '/project-pages/components-page/button-element'),
                  loadAsset('-svg-', '/project-pages/components-page/division-element'),
                  loadAsset('-svg-', '/project-pages/components-page/figure-element'),
                  loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/tags'),
                  loadAsset('-svg-', '/project-pages/components-page/menu-element'),
                  loadAsset('-svg-', '/project-pages/components-page/navigation-element'),
                  loadAsset('-svg-', '/project-pages/components-page/section-element'),
                  loadAsset('-svg-', '/project-pages/components-page/table-element'),
                  loadAsset('-svg-', '/project-pages/components-page/time-element'),
                ],
              }}
              cases={{
                pages: 11,
                axis: '[y]',
                link: [
                  'article',
                  'aside',
                  'button',
                  'division',
                  'figure',
                  'label',
                  'menu',
                  'navigation',
                  'section',
                  'table',
                  'time',
                ] as Array<string>,
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
