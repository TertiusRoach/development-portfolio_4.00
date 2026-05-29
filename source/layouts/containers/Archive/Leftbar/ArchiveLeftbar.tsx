//--|🠊 ArchiveLeftbar.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';

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
  let linkString: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/24b7280176ac0d27acb6367eaddac0d187c9afef/source/assets/svg-files/project-pages/components-page';
  return (
    <aside id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <MenuSelect
          info={{
            labelName: 'elements',
            blockName: blockName as 'leftbar',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[y]',
            color: '(mono)',
            view: 'mid-lef',
            shade: '~light~',
          }}
          cases={{
            show: 3,
            pages: [
              {
                labelName: 'article',
                imageLink: `${linkString}/article-element.svg`,
              },
              {
                labelName: 'aside',
                imageLink: `${linkString}/aside-element.svg`,
              },
              {
                labelName: 'button',
                imageLink: `${linkString}/button-element.svg`,
              },
              {
                labelName: 'division',
                imageLink: `${linkString}/division-element.svg`,
              },

              {
                labelName: 'figure',
                imageLink: `${linkString}/figure-element.svg`,
              },
              {
                labelName: 'menu',
                imageLink: `${linkString}/menu-element.svg`,
              },
              {
                labelName: 'navigation',
                imageLink: `${linkString}/navigation-element.svg`,
              },
              {
                labelName: 'section',
                imageLink: `${linkString}/section-element.svg`,
              },
              {
                labelName: 'table',
                imageLink: `${linkString}/table-element.svg`,
              },
              {
                labelName: 'time',
                imageLink: `${linkString}/time-element.svg`,
              },
            ] as Array<{ labelName: string; imageLink: string }>,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ArchiveLeftbar;
