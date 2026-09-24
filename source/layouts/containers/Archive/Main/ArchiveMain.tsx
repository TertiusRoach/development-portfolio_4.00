//--|🠊 ArchiveMain.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../components/Division/carousel/Division.carousel';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../scripts';

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

interface InfoProps {
  info: {
    blockName: '<main>' | string;
    labelName: '(default)' | string;
    pageName: '[components]' | string;
  };
}

function ArchiveMain({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait'); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'main';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    /* return checkScreen(setOrientation); */
  }, [pageName, blockName, labelName]);

  let startingPreview: number = 1;
  let blurName: string = 'obnubilate';
  return (
    <main id={`${pageName}-${blockName}`} className={`${blurName} ${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="elements-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            show: startingPreview as number,
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
      <div className={`${blockName}-background`}></div>
    </main>
  );
}

const ComponentsElements: React.FC<InfoProps> = ({ info }) => {
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
};

export default ArchiveMain;
