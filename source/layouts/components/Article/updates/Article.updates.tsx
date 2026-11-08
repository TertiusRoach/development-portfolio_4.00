//--|🠊 Article.updates.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import createClass, { createLayout } from './Article_updates';

//--|🠊 AI Code: Review Please 2026-11-08 · Exported so Article_updates.ts reads the types instead of repeating them 🠈|--\\
export interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };

  style: {
    shade: '~dark~' | '~light~';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(purple)' | '(orange)' | '(pink)' | '(yellow)' | '(brown)' | '(turquoise)';
    view: '-justify-' | '-center-' | '-left-' | '-right-';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  };

  cases: {
    image: string;
    title: string;
    description: string;
  };
}

//--|🠊 AI Code: Review Please 2026-11-08 · A function, not a const; the size and view maps moved to createLayout() in Article_updates.ts 🠈|--\\
export function ArticleUpdates({ info, style, cases }: TheseProps) {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <article className={`${info.labelName}-${info.blockName}_updates-default ${createClass(style)}`}>
      <div className="wrap-card">
        <span className="branding">
          <img
            alt={cases.title}
            style={{
              maskImage: `url(${cases.image})`,
              WebkitMaskImage: `url(${cases.image})`,
            }}
          ></img>
        </span>
        <h1 className="title">{cases.title}</h1>
        <p className={`description ${createLayout(style.size, style.view)}`}>{cases.description}</p>
      </div>
    </article>
  );
}
export default ArticleUpdates;
