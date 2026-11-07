//--|🠊 UpdatesArticle.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ArticleUpdates from '../../../../../../components/Article/updates/Article.updates';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import toggleColors from './UpdatesFunctions';
import { loadAsset } from '../../../../../../../scripts';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function UpdatesArticle({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <aside className="updates-article">
      <section className={`${blockName}-foreground`}>
        <DivisionColourize
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
          }}
          cases={{
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ArticleUpdates> with the tint from the toggles 🠈|--\\
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
            view: '-justify-',
          }}
          cases={{
            image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-light'),
            title: 'View a Tag',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default UpdatesArticle;
