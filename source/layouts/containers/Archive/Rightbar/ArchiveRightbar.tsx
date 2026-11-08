//--|🠊 ArchiveRightbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';
import { loadAsset } from '../../../tools/utilities';

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
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const blockName = stripBrackets(info.blockName, '<>') as 'rightbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

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
          <figure className={`${blockName}-midground`}>
            <div className="rig"></div>
          </figure>
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
                  loadAsset('-svg-', '/tralogfin-pages/archive/article-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/aside-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/button-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/division-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/figure-element'),
                  loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/file-pen'),
                  loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/tags'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/menu-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/navigation-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/section-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/table-element'),
                  loadAsset('-svg-', '/tralogfin-pages/archive/time-element'),
                ],
              }}
              cases={{
                pages: 12,
                axis: '[y]',
                link: [
                  'article',
                  'aside',
                  'button',
                  'division',
                  'figure',
                  'form',
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
          <figure className={`${blockName}-midground`}>
            <div className="rig"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ArchiveRightbar;
