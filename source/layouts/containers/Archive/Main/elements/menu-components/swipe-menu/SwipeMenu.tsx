//--|🠊 SwipeMenu.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './SwipeMenu.scss';

//--|🠋 Functions 🠋|--\\
import { functionHolder } from './SwipeFunctions';
import { loadAsset } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SwipeMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'swipe';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    functionHolder();
  }, [pageName, blockName, labelName]);

  let casesPages = ['<MenuSwipe>', '<MenuSwipe>', '<MenuSwipe>'] as Array<string>;
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="swipe-menu">
      <section className={`${blockName}-foreground`}>
        <div className="hori-swipe">
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />

          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-hori-lef',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-hori-rig',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-hori-cen',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-hori-mid',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
        </div>
        <div className="vert-swipe">
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />
          <MenuSwipe
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
              titles: casesPages as Array<string>,
            }}
          />

          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-vert-top',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-vert-bot',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-vert-mid',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
          <ButtonDefault
            info={{
              pageName: pageName as 'components',
              blockName: blockName as 'main',
              labelName: 'copy-vert-cen',
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              image: copyImage,
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default SwipeMenu;
