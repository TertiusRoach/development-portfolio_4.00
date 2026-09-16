//--|🠊 ArchiveHeader.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../components/Menu/swipe/Menu.swipe';
import DivisionConveyor from '../../../components/Division/conveyor/Division.conveyor';
import NavigationDefault from '../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen, loadAsset } from '../../../../scripts';
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
    blockName: '<header>' | string;
    labelName: '(default)' | string;
    pageName: '[components]' | string;
  };
}

function ArchiveHeader({ info }: InfoProps): JSX.Element {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\

  let blockName = stripBrackets(info.blockName, '<>') as 'header';
  let labelName = stripBrackets(info.labelName, '()') as 'default';
  let pageName = stripBrackets(info.pageName, '[]') as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let stateName: 'expanded' | 'unfolded' | 'collapsed' | 'squaring';
  switch (getOrientation) {
    case 'landscape':
      stateName = 'unfolded';
      return (
        <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <DivisionConveyor
              //--|🠊 <div class="elements-header_conveyor-default"/> 🠈|--\\
              cases={{
                axis: '[x]',
                call: ComponentsElements as React.ComponentType<InfoProps>,
              }}
              info={{
                blockName: 'main',
                labelName: 'elements',
                pageName: pageName as 'components',
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
          </div>
        </header>
      );
    case 'portrait':
      stateName = 'unfolded';
      return (
        <header id={`${pageName}-${blockName}`} className={`${labelName}-${blockName} ${stateName}`}>
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-footer_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                view: 'top-lef',
                shade: '~dark~',
                image: loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps') as string,
              }}
              cases={{
                image: undefined,
                view: undefined,
                tasks: '',
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <header>
              <div className="top-header"></div>
              <div className="bot-header"></div>
            </header>
          </div>
        </header>
      );
  }
}
export default ArchiveHeader;

const ComponentsElements: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <>
      <MenuSwipe
        info={{
          labelName: 'article',
          blockName: blockName as 'main',
          pageName: pageName as 'components',
        }}
        style={{
          view: '-def-',
          color: '(mono)',
          shade: '~dark~',
        }}
        cases={{
          axis: '[x]',
          pages: ['<Article_Updates>', '<Article_Loading>'] as Array<string>,
        }}
      />
    </>
  );
};

// import HeaderSwipe from '../../../components/Header/REVIEW/swipe/Header.swipe';
// var menuStyle = { color: '(mono)', shade: '~dark~' } as const;
/* <HeaderSwipe
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
            /> */
