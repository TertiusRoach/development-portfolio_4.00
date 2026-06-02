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
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';
import ArchiveNavigation from '../../../components/Navigation/Archive/Navigation.archive';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';
import HeaderSwipe from '../../../components/Header/swipe/Header.swipe';

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

  const menuStyle = { axis: '[x]', color: '(mono)', shade: '~dark~' } as const;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg';
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
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
            }, 6250);
          }}
        />
        <HeaderSwipe
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          cases={{
            axis: '[y]',
            show: 0,
            menus: [
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'article', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Article>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'aside', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Aside>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'button', pageName: pageName, blockName: blockName }}
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
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'division', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Carousel_Division>', '<Squaring_Division>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'figure', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Figure>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'menu', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Select_Menu>', '<Swipe_Menu>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'navigation', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Navigation>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'section', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Section>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'table', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Table>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'time', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  pages: ['<Default_Time>'] as Array<string>,
                }}
              />,
            ],
            chain: '<leftbar>',
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
