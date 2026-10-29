//--|🠊 UpdatesArticle.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\

//--|🠋 Functions 🠋|--\\
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
  //--|🠊 Random color, so all ten are tested 🠈|--\\
  const colors = ['(mono)', '(red)', '(green)', '(blue)', '(yellow)', '(purple)', '(orange)', '(pink)', '(brown)', '(turquoise)'] as const;
  return (
    <aside className="updates-article">
      <section className={`${blockName}-foreground`}>
        <ArticleUpdates
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            size: '<h6>',
            shade: '~dark~',
            color: colors[Math.floor(Math.random() * colors.length)],
            view: '-justify-',
          }}
          cases={{
            image:
              'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-light.svg',
            title: 'View a Tag',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default UpdatesArticle;
