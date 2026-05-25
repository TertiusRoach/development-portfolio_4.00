//--|🠊 ArchiveMain.tsx 🠈|--\\
//--|🠋 Elements 🠋|--\\
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

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionCarousel from '../../../components/Division/Archive/carousel/Division.carousel';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

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

function ComponentsElements({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';
  return (
    <>
      <ButtonElements
        info={{
          pageName: pageName,
          blockName: blockName,
          labelName: 'button' as string,
        }}
      />
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

  useEffect(() => {
    /*
    let TLLocate: string = `#${pageName}-${blockName} section.${blockName}-foreground nav ol li button`;
    let TLButton = document.querySelector(TLLocate) as HTMLButtonElement;

    //--|🠋 Step 1 🠋|--\\
    const onMouseEnter = (event: MouseEvent) => {
      //--|🠊 Define the function you want to run on hover 🠈|--\\
      let TopLefLocate: string = `#${pageName}-${blockName} section.${blockName}-foreground nav ol.car-one li button`;
      let TopLefButton = document.querySelector(TopLefLocate) as HTMLButtonElement;
    };

    //--|🠋 Step 2 🠋|--\\
    if (TLButton) {
      TLButton.addEventListener('mouseenter', onMouseEnter); //--|🠈 Safety check: Only add the listener if the button actually exists on the page 🠈|--\\
    }

    //--|🠋 Step 3 🠋|--\\
    if (TLButton) {
      return () => {
        TLButton.removeEventListener('mouseenter', onMouseEnter); //--|🠈 React runs this 'return' block right before the component re-renders or is destroyed, removing the old listener so they don't stack up! 🠈|--\\
      };
    }
    */
  }, [pageName, blockName]);

  return (
    <main id={`${pageName}-${blockName}`} className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        {/* <NavigationComponents
          //--|🠊 <nav class="browse-main"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        /> */}

        <DivisionCarousel
          //--|🠊 <div class="elements-main_carousel"/> 🠈|--\\
          style={{
            axis: '[y]',
            scope: '<one>',
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
export default ArchiveMain;
