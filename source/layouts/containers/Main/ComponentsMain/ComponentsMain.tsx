//--|🠊 ComponentsMain.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
import ArticleElements from './elements/article-components/ArticleElements';
import AsideElements from './elements/aside-components/AsideElements';
import ButtonElements from './elements/button-components/ButtonElements';

interface InfoProps {
  info: {
    //--|🠋 pageName: Id that represents the application 🠋|--\\
    pageName: '[components]';
    //--|🠋 blockName: 'Toggles between '/containers' folders. 🠋|--\\
    blockName: '<footer>' | '<header>' | '<leftbar>' | '<main>' | '<overlay>' | '<rightbar>';
    //--|🠋 labelName: Class name marker for all components. 🠋|--\\
    labelName: '(default)' | string;
  };
}
const ComponentsMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
          cases={{
            axis: '[y]',
            call: ComponentsElements,
          }}
          info={{
            labelName: 'elements',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<ComponentsMain>`}</h1>
      </div>
    </main>
  );
};
export default ComponentsMain;

function ComponentsElements({ info }: InfoProps) {
  let articleInfo = {
    labelName: 'article' as string,
    blockName: info.blockName as 'main',
    pageName: info.pageName as 'components',
  };
  let asideInfo = {
    labelName: 'aside' as string,
    blockName: info.blockName as 'main',
    pageName: info.pageName as 'components',
  };
  let buttonInfo = {
    labelName: 'button' as string,
    blockName: info.blockName as 'main',
    pageName: info.pageName as 'components',
  };

  return (
    <>
      <ArticleElements info={articleInfo} />
      <AsideElements info={asideInfo} />
      <ButtonElements info={buttonInfo} />
    </>
  );
}
