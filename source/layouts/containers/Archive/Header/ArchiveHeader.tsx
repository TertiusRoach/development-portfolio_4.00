//--|🠊 ArchiveHeader.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import HeaderSwipe from '../../../components/Header/swipe/Header.swipe';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../scripts/archive';
import { stripBrackets, checkScreen } from '../../../../scripts';
import {
  unfoldHeader,
  unfoldLeftbar,
  squaringHeader,
  collapseLeftbar,
  expandLeftbar,
  collapseHeader,
  expandHeader,
} from '../../containers';

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
  const stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring' = 'unfolded';
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'header';
  let labelName = stripBrackets(info.labelName, '()') as 'archive';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  var menuStyle = { color: '(mono)', shade: '~dark~' } as const;
  switch (getOrientation) {
    case 'landscape':
      return (
        <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <HeaderSwipe
              //--|🠊 <header class="default-header_swipe-default"/> 🠈|--\\
              cases={{
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
                axis: '[y]',
                chain: '<leftbar>',
              }}
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
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
                image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-dark') as string,
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
    case 'portrait':
      return (
        <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}></section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </header>
      );
  }
};
export default ArchiveHeader;
