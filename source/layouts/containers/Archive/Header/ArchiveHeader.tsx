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
} from '../../containers';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';
import ArchiveNavigation from '../../../components/Navigation/REVIEW/archive/Navigation.archive';

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

  const menuStyle = { color: '(mono)', shade: '~dark~' } as const;

  useEffect(() => {}, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'squaring';
  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/archive-images/my-signature/signature-icon/primary-medium.svg';
  return (
    <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
      <section className={`${blockName}-foreground`}>
        <HeaderSwipe
          //--|🠊 <header class="default-header_swipe-default"/> 🠈|--\\
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          cases={{
            chain: '<leftbar>',
            menus: [
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'article', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Article_Updates>', '<Article_Loading>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'aside', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Aside_Characters>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'button', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: [
                    '<Button_Default>',
                    '<Button_Routing>',
                    '<Button_Cleaned>',
                    '<Button_Stretch>',
                    '<Button_Profile>',
                  ] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'division', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Division_Default>', '<Division_Carousel>', '<Division_Squaring>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'figure', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Figure_Default>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'menu', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Menu_Select>', '<Menu_Swipe>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'navigation', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Navigation_Default>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'section', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Section_Characters>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'table', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Table_Default>'] as Array<string>,
                }}
              />,
              <MenuSwipe
                style={{ ...menuStyle }}
                info={{ labelName: 'time', pageName: pageName, blockName: blockName }}
                cases={{
                  show: 0,
                  axis: '[x]',
                  pages: ['<Time_Default>'] as Array<string>,
                }}
              />,
            ],
            show: 0,
            axis: '[y]',
          }}
        />
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
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <header>
          <div className="top-header"></div>
          <div className="bot-header"></div>
        </header>
        {/* <h1 className="display-1">{`<ComponentsHeader>`}</h1> */}
      </div>
    </header>
  );
};
export default ArchiveHeader;
