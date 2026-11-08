//--|🠊 LandingOverlay.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ArticleLoading from '../../../components/Article/loading/Article.loading';
import ArticleUpdates from '../../../components/Article/updates/Article.updates';

//--|🠋 Functions 🠋|--\\
import obnubilateContainer from '../../../scripts/Main_Over';
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';

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
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟪|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let stateName: 'visible' | 'loading' | 'updates' | 'hidden' | 'visible';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'loading';
      obnubilateContainer(pageName, blockName);
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
                apps: '{tralogfin}',
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
                color: '(mono)',
                view: '-center-',
              }}
              cases={{
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-light'),
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
      obnubilateContainer(pageName, blockName);
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
                apps: '{tralogfin}',
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
                color: '(mono)',
                view: '-center-',
              }}
              cases={{
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-light'),
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
