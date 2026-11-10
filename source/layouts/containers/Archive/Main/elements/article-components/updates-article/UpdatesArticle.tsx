//--|🠊 UpdatesArticle.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import ArticleUpdates from '../../../../../../components/Article/updates/Article.updates';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Functions 🠋|--\\
import toggleColors from './UpdatesFunctions';
import { loadAsset } from '../../../../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function UpdatesArticle({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    const colourizeDivisions = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="updates-article"] div[class*="_division-colourize"]`,
    ) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < colourizeDivisions.length; i++) {
      colourizeDivisions[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  let viewShade = 2 as number; //--|🠈 AI Code: Review Please 2026-11-10 · Opens on the second slide, the ~light~ card 🠈|--\\
  return (
    <aside className="updates-article">
      <section className={`${blockName}-foreground`}>
        <MenuSwipe
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'updates-shade',
          }}
          style={{
            view: '-def-',
            color: '(mono)',
            shade: '~dark~',
          }}
          cases={{
            axis: '[x]',
            titles: ['', ''] as Array<string>,
          }}
        />
        <DivisionColourize
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
          }}
          cases={{
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ArticleUpdates> with the tint from the toggles 🠈|--\\
          }}
        />
        <DivisionFullscreen
          //--|🠊 <div class="updates-shade-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[x]',
            show: viewShade as number,
            call: UpdateShades as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'updates-shade',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
          /*
            onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
              if (event.deltaY < 0) {
                scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
              } else if (event.deltaY > 0) {
                scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
              }
            }}
          */
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
const UpdateShades: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <ViewDark
        info={{
          labelName: 'shade-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewLight
        info={{
          labelName: 'shade-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
};

let ViewDark = ({ info }: InfoProps) => {
  return (
    <section className={`updates-${info.blockName}_${info.labelName}`}>
      <ArticleUpdates
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
        style={{
          size: '<p>',
          shade: '~dark~',
          color: '(mono)',
          view: '-justify-',
        }}
        cases={{
          image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-light'),
          title: 'View a Tag',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }}
      />
    </section>
  );
};
let ViewLight = ({ info }: InfoProps) => {
  return (
    <section className={`updates-${info.blockName}_${info.labelName}`}>
      <ArticleUpdates
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
        style={{
          size: '<p>',
          shade: '~light~',
          color: '(mono)',
          view: '-justify-',
        }}
        cases={{
          image: loadAsset('-svg-', '/archive-images/my-signature/signature-icon/primary-light'),
          title: 'View a Tag',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }}
      />
    </section>
  );
};
export default UpdatesArticle;
