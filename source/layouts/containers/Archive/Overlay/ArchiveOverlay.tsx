//--|🠊 ArchiveOverlay.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { hideOverlay } from '../../../../scripts';
import { stripBrackets } from '../../../scripts/archive';

//--|🠋 Components 🠋|--\\
import ArticleLoading from '../../../components/Article/loading/Article.loading';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import ArticleUpdates from '../../../components/Article/updates/Article.updates';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<overlay>';
    labelName: '(default)' | string;
  };
}
const ArchiveOverlay: React.FC<InfoProps> = ({ info }) => {
  let stateName: 'visible' | 'loading' | 'updates' | 'hidden' | 'visible' = 'loading';

  const blockName = stripBrackets(info.blockName, '<>') as 'overlay';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    setTimeout(() => {
      hideOverlay(pageName, blockName);
    }, 3000);
  }, [pageName, blockName]);

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
            view: '-justify-',
          }}
          cases={{
            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg',
            title: 'View a Tag',
            description: 'Text Here',
          }}
        />
      </figure>
      <div className={`${blockName}-background`}>{/* <h1 className="display-1">{`<ComponentsOverlay>`}</h1> */}</div>
    </section>
  );
};
export default ArchiveOverlay;
