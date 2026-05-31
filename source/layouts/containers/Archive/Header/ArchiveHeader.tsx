//--|🠊 ArchiveHeader.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/archive';
import {
  unfoldHeader,
  unfoldLeftbar,
  squaringHeader,
  collapseLeftbar,
  expandLeftbar,
  collapseHeader,
  expandHeader,
} from '../../../../scripts';

//--|🠋 Components 🠋|--\\
import MenuCarousel from '../../../components/Menu/ARCHIVE/carousel/Menu.carousel';
import ArchiveNavigation from '../../../components/Navigation/Archive/Navigation.archive';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

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
  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg';
  /* let svgPath: Array<string> = ['<Default_Button>', '<Routing_Button>', '<Profile_Button>', '<Stretch_Button>']; */
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
              pageName: pageName as 'components',
              blockName: blockName as 'header',
              labelName: 'button',
            }}
            cases={{
              show: 0,
              pages: [
                '<Default_Button>',
                '<Routing_Button>',
                '<Cleaned_Button>',
                '<Stretch_Button>',
                '<Profile_Button>',
              ] as Array<string>,
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

        <NavigationDefault
          //--|🠊 <nav class="default-header_navigation-default"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            color: '(mono)',
            view: 'top-lef',
            shade: '~light~',
            image: imageLink,
          }}
          cases={{
            tasks: '',
            image: undefined,
            view: undefined,
          }}
          onClick={() => {
            if (blockName === 'header') {
              unfoldLeftbar(pageName, 'click', 'leftbar');
            }
          }}
          onMouseEnter={() => {
            unfoldHeader(pageName, 'hover', blockName);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              squaringHeader(pageName, 'exit', blockName);
            }, 12500);
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
