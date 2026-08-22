//--|🠊 ArchiveLeftbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { stripBrackets } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<leftbar>';
    labelName: '(default)';
  };
}
const ArchiveLeftbar: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' = 'collapsed';

  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <MenuSelect
          cases={{
            show: 3,
            buttons: [
              {
                labelName: 'article',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/article-element') as string,
              },
              {
                labelName: 'aside',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/aside-element') as string,
              },
              {
                labelName: 'button',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/button-element') as string,
              },
              {
                labelName: 'division',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/division-element') as string,
              },
              {
                labelName: 'figure',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/figure-element') as string,
              },
              {
                labelName: 'menu',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/menu-element') as string,
              },
              {
                labelName: 'navigation',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/navigation-element') as string,
              },
              {
                labelName: 'section',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/section-element') as string,
              },
              {
                labelName: 'table',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/table-element') as string,
              },
              {
                labelName: 'time',
                imageLink: loadAsset('-svg-', '/project-pages/components-page/time-element') as string,
              },
            ] as Array<{ labelName: string; imageLink: string }>,
          }}
          info={{
            labelName: 'elements' as string,
            blockName: blockName as 'leftbar',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[y]',
            color: '(mono)',
            view: 'mid-lef',
            shade: '~light~',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ArchiveLeftbar;
