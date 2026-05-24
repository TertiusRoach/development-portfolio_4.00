//--|🠊 ArchiveHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';
import markMenu from '../../../components/Menu/archive/carousel/Menu_carousel';

//--|🠋 Components 🠋|--\\
import MenuCarousel from '../../../components/Menu/archive/carousel/Menu.carousel';
import ArchiveNavigation from '../../../components/Navigation/Archive/Navigation.archive';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';

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
const ArchiveHeader: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'header';
  const labelName = stripBrackets(info.labelName, '()') as 'archive';
  const pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  let svgPath: Array<string> = ['<Default_Button>', '<Routing_Button>', '<Profile_Button>', '<Stretch_Button>'];
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <header className={`${pageName}-carousels-default_header I`}>
          <MenuSwipe
            style={{
              axis: '[x]',
              color: '(mono)',
              shade: '~dark~',
            }}
            info={{
              labelName: 'button',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
            cases={{
              pages: ['<Default_Button>', '<Routing_Button>', '<Profile_Button>', '<Stretch_Button>'] as Array<string>,
            }}
          />

          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Button>', '<Routing_Button>', '<Profile_Button>', '<Stretch_Button>'] as Array<string>,
            }}
            info={{
              labelName: 'button',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Article>'] as Array<string>,
            }}
            info={{
              labelName: 'article',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Aside>'] as Array<string>,
            }}
            info={{
              labelName: 'aside',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Division>'] as Array<string>,
            }}
            info={{
              labelName: 'division',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Figure>'] as Array<string>,
            }}
            info={{
              labelName: 'figure',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Menu>'] as Array<string>,
            }}
            info={{
              labelName: 'menu',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Navigation>'] as Array<string>,
            }}
            info={{
              labelName: 'navigation',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Section>'] as Array<string>,
            }}
            info={{
              labelName: 'section',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Table>'] as Array<string>,
            }}
            info={{
              labelName: 'table',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
          {/* <MenuCarousel
            style={{
              axis: '[x]',
              view: '-top-',
              color: '(mono)',
              shade: '~dark~',
              type: '{scroll}',
            }}
            cases={{
              paths: ['<Default_Time>'] as Array<string>,
            }}
            info={{
              labelName: 'time',
              blockName: blockName as '<header>',
              pageName: pageName as '[components]',
            }}
          /> */}
        </header>
        <ArchiveNavigation
          //--|🠊 <nav className={`${pageName}-header`}> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<ComponentsHeader>`}</h1>
      </div>
    </header>
  );
};
export default ArchiveHeader;
