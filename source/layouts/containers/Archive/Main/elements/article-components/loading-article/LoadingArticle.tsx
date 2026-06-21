//--|🠊 LoadingArticle.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './LoadingArticle.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import ArticleLoading from '../../../../../../components/Article/loading/Article.loading';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const LoadingArticle: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <aside className="loading-article">
      <section className={`${blockName}-foreground`}>
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
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default LoadingArticle;
