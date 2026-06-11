//--|🠊 ArchiveFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSelect from '../../../components/Menu/select/Menu.select';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { togglePages } from '../../../../scripts';
import { stripBrackets } from '../../../scripts/archive';
import { unfoldFooter, squaringFooter } from '../../../../scripts';
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
        <FooterApplications
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />

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
            shade: '~light~',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/tralogfin/trinity-apps.svg` as string,
          }}
          cases={{
            image: undefined,
            view: undefined,
            tasks: '',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <article className={`${labelName}-${blockName}_article-update`}>
          <section>
            <header>
              <div>
                <img src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg" />
              </div>
            </header>
            <footer>
              <h3>
                Copied REACT
                <br />
                component to
                <br />
                clipboard.
              </h3>
            </footer>
          </section>
        </article>
      </figure>
      <div className={`${blockName}-background`}></div>
    </footer>
  );
};
export default ArchiveFooter;
