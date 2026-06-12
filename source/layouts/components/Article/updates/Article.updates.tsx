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
}

const ArticleUpdates: React.FC<TheseProps> = ({ info }) => {
  const pageName = info.pageName as string;
  const blockName = info.blockName as string;
  const labelName = info.labelName as string;

  useEffect(() => {}, [pageName, blockName, labelName]);
  let link =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7';

  return (
    <article className={`${info.labelName}-${info.blockName}_updates-default`}>
      <div className="wrapper par_lef_dar">
        <header className="logo">
          <img src={`${link}/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg`} alt="" />
        </header>
        <section className="title">
          <h1>Title Here</h1>
        </section>
        <footer className="description">
          <p>Description Here</p>
        </footer>
      </div>
    </article>
  );
};
export default ArticleUpdates;
