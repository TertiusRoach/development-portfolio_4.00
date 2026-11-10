//--|🠊 LoadingArticle.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
import ArticleLoading from '../../../../../../components/Article/loading/Article.loading';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\

//--|🠋 Functions 🠋|--\\
import toggleColors from './LoadingFunctions'; //--|🠈 AI Code: Review Please 2026-11-10 🠈|--\\
import { stripBrackets } from '../../../../../../tools/conversions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
//--|🠊 AI Code: Review Please 2026-11-10 · Copied from <UpdatesArticle>: the swipe flips between a ~dark~ and a ~light~ slide 🠈|--\\
function LoadingArticle({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  //--|🠊 AI Code: Review Please 2026-11-10 · The colour toggles step back until they're hovered, like every [archive] page 🠈|--\\
  useEffect(() => {
    const colourizeDivisions = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="loading-article"] div[class*="_division-colourize"]`,
    ) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < colourizeDivisions.length; i++) {
      colourizeDivisions[i].classList.add('downplay');
    }
  }, [pageName, blockName, labelName]);

  let viewShade = 1 as number;
  return (
    <aside className="loading-article">
      <section className={`${blockName}-foreground`}>
        <MenuSwipe
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'loading-shade',
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
            task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ArticleLoading> with the tint from the toggles 🠈|--\\
          }}
        />
        <DivisionFullscreen
          //--|🠊 <div class="loading-shade-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[x]',
            show: viewShade as number,
            call: LoadingShades as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'loading-shade',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
const LoadingShades: React.FC<InfoProps> = ({ info }) => {
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
    <section className={`loading-${info.blockName}_${info.labelName}`}>
      <ArticleLoading
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
        style={{
          shade: '~dark~',
          color: '(mono)',
          clarity: '⟨opaque⟩',
        }}
        cases={{
          apps: '{tralogfin}',
        }}
      />
    </section>
  );
};
let ViewLight = ({ info }: InfoProps) => {
  return (
    <section className={`loading-${info.blockName}_${info.labelName}`}>
      <ArticleLoading
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
        style={{
          shade: '~light~',
          color: '(mono)',
          clarity: '⟨opaque⟩',
        }}
        cases={{
          apps: '{tralogfin}',
        }}
      />
    </section>
  );
};
export default LoadingArticle;
