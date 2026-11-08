//--|🠊 HyperlinkOverlay.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useState, useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ArticleLoading from '../../../components/Article/loading/Article.loading';
import ArticleUpdates from '../../../components/Article/updates/Article.updates';

//--|🠋 Functions 🠋|--\\
import obnubilateContainer from '../../../scripts/Main_Over';
import { stripBrackets } from '../../../tools/conversions';
import { checkScreen } from '../../../tools/synching';
import { loadAsset } from '../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: '[hyperlink]' | string;
    blockName: '<overlay>' | string;
    labelName: '(default)' | string;
  };
}
function HyperlinkOverlay({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'hyperlink';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟥|--\\
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
                color: '(red)',
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
                color: '(red)',
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
export default HyperlinkOverlay;
