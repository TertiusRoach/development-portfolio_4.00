//--|🠊 ArchiveOverlay.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

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
    pageName: '[components]';
    blockName: '<overlay>';
    labelName: '(default)' | string;
  };
}
function ArchiveOverlay({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'components';
  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  const labelName = stripBrackets(info.labelName, '()') as 'default';

  useEffect(() => {
    //--|🟨|--\\
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
                color: '(mono)', //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
                clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-10 · The look it always had 🠈|--\\
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
                color: '(mono)', //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
                clarity: '⟨opaque⟩', //--|🠈 AI Code: Review Please 2026-11-10 · The look it always had 🠈|--\\
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
export default ArchiveOverlay;
