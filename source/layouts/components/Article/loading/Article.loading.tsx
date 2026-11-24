//--|🠊 Article.loading.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { loadShade } from './Article_loading';
import { stripBrackets } from '../../../tools/conversions';

//--|🠊 Exported so Article_loading.ts reads the types instead of repeating them 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    clarity: '⟨lucid⟩' | '⟨opaque⟩'; //--|🠈 ⟨opaque⟩ is the look it had before colours 🠈|--\\
  };
  cases: {
    apps: '{signature}' | '{tralogfin}';
  };
}

//--|🠊 A function, not a const: the main function of the file 🠈|--\\
export function ArticleLoading({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  //--|🠊 The props class, always second 🠈|--\\
  return (
    <article className={`${info.labelName}-${info.blockName}_loading-default ${createClass(style)}`}>
      <img
        alt="article-loading"
        src={loadShade(cases.apps, style.shade)}
        className={`${stripBrackets(style.shade, '~~')}`} //--|🠈 The full dark / light: Article.loading.scss selects img[class='dark'] 🠈|--\\
      />
    </article>
  );
}
export default ArticleLoading;
