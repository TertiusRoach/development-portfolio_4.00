//--|🠊 ComponentsMain.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';

//--|🠋 Elements 🠋|--\\
// import ArticleElements from './elements/article-components/ArticleElements';
// import AsideElements from './elements/aside-components/AsideElements';

import ButtonElements from './elements/button-components/ButtonElements';
import DivisionElements from './elements/division-components/DivisionElements';
import ArticleElements from './elements/article-components/ArticleElements';
import AsideElements from './elements/aside-components/AsideElements';
import FigureElements from './elements/figure-components/FigureElements';
import MenuElements from './elements/menu-components/MenuElements';
import NavigationElements from './elements/navigation-components/NavigationElements';
import SectionElements from './elements/section-components/SectionElements';
import TableElements from './elements/table-components/TableElements';
import TimeElements from './elements/time-components/TimeElements';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';
import NavigationBrowse from '../../../components/Navigation/browse/Navigation.browse';

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
        <NavigationBrowse
          //--|🠊 <nav class="browse-main"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />

        <DivisionCarousel
          //--|🠊 <div class="profile-header_carousel"/> 🠈|--\\
          style={{
            axis: '[y]',
          }}
          cases={{
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
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';
  let articleInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'article' as string,
  };
  let asideInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'aside' as string,
  };
  let buttonInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'button' as string,
  };
  let divisionInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'division' as string,
  };
  let figureInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'figure' as string,
  };
  let menuInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'menu' as string,
  };
  let navigationInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'navigation' as string,
  };
  let sectionInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'section' as string,
  };
  let tableInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'table' as string,
  };
  let timeInfo = {
    pageName: pageName,
    blockName: blockName,
    labelName: 'time' as string,
  };

  return (
    <>
      <ButtonElements info={buttonInfo} />

      <ArticleElements info={articleInfo} />
      <AsideElements info={asideInfo} />
      <DivisionElements info={divisionInfo} />
      <FigureElements info={figureInfo} />
      <MenuElements info={menuInfo} />
      <NavigationElements info={navigationInfo} />
      <SectionElements info={sectionInfo} />
      <TableElements info={tableInfo} />
      <TimeElements info={timeInfo} />
    </>
  );
}
