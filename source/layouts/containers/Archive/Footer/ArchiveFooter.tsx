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
const ArchiveFooter: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {}, [pageName, blockName]);

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
        <footer className={`default-${blockName}_select-default`}>
          <div className="select-application">
            <ButtonRouting
              style={{
                size: '<h1>',
                view: 'bot-cen',
                color: '(green)',
                shade: '~light~',
                type: '{button}',
                image:
                  `${link}/source/assets/svg-files/archive-images/trinity-apps/track-a-day/primary-medium.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                labelName: `${pageName}-overtime`,
              }}
              onClick={() => {
                togglePages(pageName, 'overtime');
              }}
            />
            <ButtonRouting
              style={{
                size: '<h1>',
                view: 'bot-cen',
                color: '(blue)',
                shade: '~light~',
                type: '{button}',
                image:
                  `${link}/source/assets/svg-files/archive-images/trinity-apps/log-a-ticket/primary-medium.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                labelName: `${pageName}-ticketing`,
              }}
              onClick={() => {
                togglePages(pageName, 'ticketing');
              }}
            />
            <ButtonRouting
              style={{
                size: '<h1>',
                view: 'bot-cen',
                color: '(red)',
                shade: '~light~',
                type: '{button}',
                image:
                  `${link}/source/assets/svg-files/archive-images/trinity-apps/find-a-link/primary-medium.svg` as string,
              }}
              info={{
                pageName: info.pageName,
                blockName: info.blockName,
                labelName: `${pageName}-hyperlink`,
              }}
              onClick={() => {
                togglePages(pageName, 'hyperlink');
              }}
            />
          </div>
        </footer>

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
