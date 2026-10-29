//--|🠊 Article.updates.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
// import './Article.updates.scss';

//--|🠋 Functions 🠋|--\\
import { createClass } from './Article_updates';

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
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
    view: '-justify-' | '-center-' | '-left-' | '-right-';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
  };

  cases: {
    image: string;
    title: string;
    description: string;
  };
}

const ArticleUpdates: React.FC<TheseProps> = ({ info, style, cases }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);
  const sizeClass: Record<TheseProps['style']['size'], string> = {
    '<h1>': 'one',
    '<h2>': 'two',
    '<h3>': 'thr',
    '<h4>': 'fou',
    '<h5>': 'fiv',
    '<h6>': 'six',
    '<p>': 'par',
  };
  const viewClass: Record<TheseProps['style']['view'], string> = {
    '-left-': 'lef',
    '-right-': 'rig',
    '-center-': 'cen',
    '-justify-': 'jus',
  };
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
        <p className={`description ${sizeClass[style.size]}_${viewClass[style.view]}`}>{cases.description}</p>
      </div>
    </article>
  );
};
export default ArticleUpdates;
