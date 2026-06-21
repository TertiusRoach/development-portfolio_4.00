//--|🠊 Article.updates.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import './Article.updates.scss';

//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';

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
  let link =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7';
  const shadeClass: Record<TheseProps['style']['shade'], string> = {
    '~dark~': 'dar',
    '~light~': 'lig',
  };
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
    <article className={`${info.labelName}-${info.blockName}_updates-default`}>
      <div className={`wrapper_${shadeClass[style.shade]}`}>
        <header className="logo">
          <img src={cases.image} alt="" />
        </header>
        <section className="title">
          <h1>{cases.title}</h1>
        </section>
        <footer className="description">
          <p className={`${sizeClass[style.size]}_${viewClass[style.view]}`}>{cases.description}</p>
        </footer>
      </div>
    </article>
  );
};
export default ArticleUpdates;
