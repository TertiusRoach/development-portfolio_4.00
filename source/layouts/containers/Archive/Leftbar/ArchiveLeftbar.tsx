//--|🠊 ArchiveLeftbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';
import { loadAsset } from '../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<leftbar>';
    labelName: '(default)';
  };
}
function ArchiveLeftbar({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName = 'obnubilate' as string;
  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
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
                align: '-top-',
                view: 'mid-lef',
                color: '(mono)',
                shade: '~light~',
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
            <div className="lef"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}>
            <div className="lef"></div>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ArchiveLeftbar;
