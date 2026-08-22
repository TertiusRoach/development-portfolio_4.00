//--|🠊 ArchiveFooter.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';
import FooterApplications from '../../../components/Footer/applications/Footer.applications';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { stripBrackets, checkScreen } from '../../../../scripts';
import { unfoldFooter, squaringFooter } from '../../containers';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<footer>';
    labelName: '(default)' | string;
  };
}
const ArchiveFooter: React.FC<InfoProps> = ({ info }) => {
  const stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'footer';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
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
                image: loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps') as string,
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
    case 'portrait':
      return (
        <footer id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
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
                shade: '~light~',
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-dark') as string,
              }}
              cases={{
                tasks: '',
                image: undefined,
                view: undefined,
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <footer></footer>
          </div>
        </footer>
      );
  }
};
export default ArchiveFooter;
