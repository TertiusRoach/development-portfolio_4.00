//--|🠊 UpdatesArticle.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './UpdatesArticle.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import ArticleLoading from '../../../../../../components/Article/loading/Article.loading';
import ArticleUpdates from '../../../../../../components/Article/updates/Article.updates';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const UpdatesArticle: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <aside className="updates-article">
      <section className={`${blockName}-foreground`}>
        <ArticleUpdates
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default UpdatesArticle;
