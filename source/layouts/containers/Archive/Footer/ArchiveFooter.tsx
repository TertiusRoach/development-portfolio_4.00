//--|🠊 ArchiveFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';
import { unfoldFooter, squaringFooter } from '../../../../scripts';

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
  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/trinity-apps/tralogfin/trinity-apps.svg';

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
        <footer></footer>
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
            image: imageLink,
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
      <div className={`${blockName}-background`}>{/* <h1 className="display-1">{`<ComponentsFooter>`}</h1> */}</div>
    </footer>
  );
};
export default ArchiveFooter;
