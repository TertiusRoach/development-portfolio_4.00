//--|🠊 ArchiveFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { togglePages } from '../../../../scripts';
import { stripBrackets } from '../../../scripts/archive';
import { unfoldFooter, squaringFooter } from '../../containers';
import ButtonRouting from '../../../components/Button/routing/Button.routing';
import FooterApplications from '../../../components/Footer/applications/Footer.applications';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<footer>';
    labelName: '(default)' | string;
  };
}
const ArchiveFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  let link =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1';
  return (
    <footer
      id={`${pageName}-${blockName}`}
      className={`${labelName}-${blockName} ${stateName}`}
      onMouseEnter={() => {
        unfoldFooter(pageName, 'hover', blockName);
      }}
      onMouseLeave={() => {
        squaringFooter(pageName, 'exit', blockName);
      }}
    >
      <section className={`${blockName}-foreground`}>
        <NavigationDefault
          //--|🠊 <nav class="default-footer_navigation-default"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            color: '(mono)',
            view: 'bot-rig',
            shade: '~dark~',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/tralogfin/trinity-apps.svg` as string,
          }}
          cases={{
            image: undefined,
            view: undefined,
            tasks: '',
          }}
        />
        <FooterApplications
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          cases={{
            axis: '[x]',
            apps: '{archive}',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <footer></footer>
      </div>
    </footer>
  );
};
export default ArchiveFooter;
