//--|🠊 ScrollMenu.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './ScrollMenu.scss';

//--|🠋 Functions 🠋|--\\
// import { togglePreview } from './ScrollFunctions';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ScrollMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'swipe';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    // togglePreview();
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
              labelName: labelName as 'swipe',
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
      <div className={`${blockName}-background`}>{/* <h1 className="display-1">{`<ScrollMenu>`}</h1> */}</div>
    </aside>
  );
};
export default ScrollMenu;
