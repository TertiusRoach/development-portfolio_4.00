//--|🠊 ArticleElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
import DefaultArticle from './default-article/DefaultArticle';
import LoadingArticle from './loading-article/LoadingArticle';

//--|🠋 Styles 🠋|--\\
import './ArticleElements.scss';

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
      <LoadingArticle info={{ labelName: 'loading' as string, pageName: pageName, blockName: blockName }} />
      {/* <UpdatesArticle info={{ labelName: 'updates' as string, pageName: pageName, blockName: blockName }} /> */}

      {/* <DefaultArticle info={defaultInfo} /> */}
    </>
  );
}
export default ArticleElements;
