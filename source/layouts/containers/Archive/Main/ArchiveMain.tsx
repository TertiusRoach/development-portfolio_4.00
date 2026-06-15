//--|🠊 ArchiveMain.tsx 🠈|--\\
//--|🠋 Elements 🠋|--\\
import MenuElements from './elements/menu-components/MenuElements';
import TimeElements from './elements/time-components/TimeElements';
import TableElements from './elements/table-components/TableElements';
import AsideElements from './elements/aside-components/AsideElements';
import FigureElements from './elements/figure-components/FigureElements';
import ButtonElements from './elements/button-components/ButtonElements';
import ArticleElements from './elements/article-components/ArticleElements';
import SectionElements from './elements/section-components/SectionElements';
import DivisionElements from './elements/division-components/DivisionElements';
import NavigationElements from './elements/navigation-components/NavigationElements';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface InfoProps {
  info: {
    pageName: '[components]';
    blockName: '<main>';
    labelName: '(default)' | string;
  };
}

function ComponentsElements({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';
  return (
    <>
      <ArticleElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'article' as string,
        }}
      />
      <AsideElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'aside' as string,
        }}
      />
      <ButtonElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'button' as string,
        }}
      />
      <DivisionElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'division' as string,
        }}
      />
      <FigureElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'figure' as string,
        }}
      />
      <MenuElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'menu' as string,
        }}
      />
      <NavigationElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'navigation' as string,
        }}
      />
      <SectionElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'section' as string,
        }}
      />
      <TableElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'table' as string,
        }}
      />
      <TimeElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'time' as string,
        }}
      />
    </>
  );
}

const ArchiveMain: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const labelName = stripBrackets(info.labelName, '()') as 'default';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName, labelName]);

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="elements-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            call: ComponentsElements as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'elements',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>{/* <h1 className="display-1">{`<ComponentsMain>`}</h1> */}</div>
    </main>
  );
};
export default ArchiveMain;
