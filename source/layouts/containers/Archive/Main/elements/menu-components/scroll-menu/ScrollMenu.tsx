//--|🠊 ScrollMenu.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './ScrollMenu.scss';

//--|🠋 Functions 🠋|--\\
import { functionHolder } from './ScrollFunctions';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ScrollMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'scroll';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    functionHolder();
  }, [pageName, blockName, labelName]);

  let casesPages = ['<MenuScroll>', '<MenuScroll>', '<MenuScroll>'] as Array<string>;
  return (
    <aside className="scroll-menu">
      <section className={`${blockName}-foreground`}>
        <div className="hori-scroll">
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-left',
            }}
            style={{
              view: '-lef-',
              color: '(mono)',
              shade: '~dark~',
            }}
            cases={{
              axis: '[x]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-right',
            }}
            style={{
              view: '-rig-',
              color: '(mono)',
              shade: '~dark~',
            }}
            cases={{
              axis: '[x]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-center',
            }}
            style={{
              view: '-cen-',
              color: '(mono)',
              shade: '~dark~',
            }}
            cases={{
              axis: '[x]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-horizontal',
            }}
            style={{
              view: '-def-',
              color: '(mono)',
              shade: '~dark~',
            }}
            cases={{
              axis: '[x]',
              pages: casesPages as Array<string>,
            }}
          />
        </div>
        <div className="vert-scroll">
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-top',
            }}
            style={{
              view: '-top-',
              color: '(mono)',
              shade: '~light~',
            }}
            cases={{
              axis: '[y]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-bottom',
            }}
            style={{
              view: '-bot-',
              color: '(mono)',
              shade: '~light~',
            }}
            cases={{
              axis: '[y]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-middle',
            }}
            style={{
              view: '-mid-',
              color: '(mono)',
              shade: '~light~',
            }}
            cases={{
              axis: '[y]',
              pages: casesPages as Array<string>,
            }}
          />
          <MenuScroll
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'standard-vertical',
            }}
            style={{
              view: '-def-',
              color: '(mono)',
              shade: '~light~',
            }}
            cases={{
              axis: '[y]',
              pages: casesPages as Array<string>,
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default ScrollMenu;
