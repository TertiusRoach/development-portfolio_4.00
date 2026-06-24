//--|🠊 Article.loading.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Article.loading.scss';

//--|🠋 Functions 🠋|--\\
import loadImage from './Article_loading';
import stripBrackets, { arabicToRoman, romanToArabic } from '../../../../scripts';

//--|🠋 Components 🠋|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };

  style: {
    shade: '~dark~' | '~light~';
  };
  cases: {
    apps: '{signature}' | '{tralogfin}';
  };
}

const ArticleLoading: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <article className={`${info.labelName}-${info.blockName}_loading-default`}>
      <img
        alt="article-loading"
        src={loadImage(style.shade, cases.apps)}
        className={`${stripBrackets(style.shade, '~~')}`}
      />
    </article>
  );
};
export default ArticleLoading;
