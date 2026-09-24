//--|🠊 ArchiveLeftbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<leftbar>';
    labelName: '(default)';
  };
}

function ArchiveLeftbar({ info }: InfoProps): JSX.Element {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait'); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let blurName: string = 'obnubilate';
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
    case 'portrait':
      stateName = 'collapsed';
      return (
        <aside id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ArchiveLeftbar;
