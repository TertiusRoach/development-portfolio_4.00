//--|🠊 ArticleElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\

import LoadingArticle from './loading-article/LoadingArticle';

//--|🠋 Styles 🠋|--\\
import './ArticleElements.scss';
import UpdatesArticle from './updates-article/UpdatesArticle';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

const ArticleElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionCarousel
        cases={{
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
};

function ArticleComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;

  return (
    <>
      <UpdatesArticle info={{ labelName: 'updates' as string, pageName: pageName, blockName: blockName }} />
      <LoadingArticle info={{ labelName: 'loading' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
}
export default ArticleElements;
