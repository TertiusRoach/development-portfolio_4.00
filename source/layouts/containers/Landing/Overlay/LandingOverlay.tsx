//--|🠊 LandingOverlay.tsx 🠈|--//
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ArticleLoading from '../../../components/Article/loading/Article.loading';
import ArticleUpdates from '../../../components/Article/updates/Article.updates';

//--|🠋 Functions 🠋|--\\
import blockViews from '../../containers';
import obnubilateContainers from './LandingFunctions';
import { stripBrackets, checkScreen } from '../../../../scripts';

interface InfoProps {
  info: {
    pageName: '[landing]' | string;
    blockName: '<overlay>' | string;
    labelName: '(default)' | string;
  };
}
function LandingOverlay({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let pageName = stripBrackets(info.pageName, '[]') as 'landing';
  let blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  let labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟪|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let stateName: 'visible' | 'loading' | 'updates' | 'hidden' | 'visible';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'loading';
      obnubilateContainers(pageName, blockName);
      return (
        <section id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}>
            <ArticleLoading
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~light~',
              }}
              cases={{
                apps: '{signature}',
              }}
            />
            <ArticleUpdates
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                size: '<h6>',
                shade: '~dark~',
                view: '-center-',
              }}
              cases={{
                image:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg',
                title: 'View a Tag',
                description: 'Text Here',
              }}
            />
          </figure>
          <div className={`${blockName}-background`}></div>
        </section>
      );
    case 'portrait':
      stateName = 'loading';
      obnubilateContainers(pageName, blockName);
      return (
        <section id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}>
            <ArticleLoading
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~light~',
              }}
              cases={{
                apps: '{signature}',
              }}
            />
            <ArticleUpdates
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                size: '<h6>',
                shade: '~dark~',
                view: '-center-',
              }}
              cases={{
                image:
                  'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg',
                title: 'View a Tag',
                description: 'Text Here',
              }}
            />
          </figure>
          <div className={`${blockName}-background`}></div>
        </section>
      );
  }
}
export default LandingOverlay;
