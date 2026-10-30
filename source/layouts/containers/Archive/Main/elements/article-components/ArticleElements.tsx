//--|🠊 ArticleElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import LoadingArticle from './loading-article/LoadingArticle';
import UpdatesArticle from './updates-article/UpdatesArticle';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function ArticleElements({ info }: InfoProps) {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: ArticleComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
}

const ArticleComponents: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName;
  const labelName = info.labelName;
  const pageName = info.pageName;

  return (
    <>
      <UpdatesArticle info={{ labelName: 'updates' as string, pageName: pageName, blockName: blockName }} />
      <LoadingArticle info={{ labelName: 'loading' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default ArticleElements;
