//--|🠊 Header.swipe.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../scripts';
import { markCarousel, loadCarousel, swipeCarousel } from './Header_swipe';

//--|🠋 Styles 🠋|--\\
import './Header.swipe.scss';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  cases: {
    show: number;
    axis: '[x]' | '[y]';
    menus: Array<React.ReactNode>;
    chain: '<main>' | '<header>' | '<footer>' | '<overlay>' | '<leftbar>' | '<rightbar>';
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}

const HeaderSwipe: React.FC<TheseProps> = ({ info, cases }) => {
  /*--|🠋
  
  🠉|--*/
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  //--|🠊 Checks [x] or [y] axis 🠈|--\\
  const axisList: Record<'[x]' | '[y]', 'ul' | 'ol'> = {
    '[x]': 'ul',
    '[y]': 'ol',
  };
  const axisClass: Record<TheseProps['cases']['axis'], string> = {
    '[x]': 'hori-X-swipe',
    '[y]': 'vert-Y-swipe',
  };
  const axisMenus = {
    '[x]': (
      <li className="showing-horizontal_I">
        {cases.menus.map((menu, index) => (
          <React.Fragment key={index}>{menu}</React.Fragment>
        ))}
      </li>
    ),
    '[y]': (
      <li className="showing-vertical_I">
        {cases.menus.map((menu, index) => (
          <React.Fragment key={index}>{menu}</React.Fragment>
        ))}
      </li>
    ),
  };

  useEffect(() => {
    /*--|🠋
        
    🠉|--*/
    const chainBlock: string = stripBrackets(cases.chain, '<>');
    const selector: string = `#${pageName}-${chainBlock} menu[class*="${chainBlock}"] ol[class*="vert-Y"] li[class*="showing-vertical"]`;

    let classObserver: MutationObserver | null = null;
    let domObserver: MutationObserver | null = null;

    const watchClassChanges = (target: HTMLElement) => {
      classObserver = new MutationObserver(() => {
        markCarousel(pageName, blockName, labelName, cases.chain, cases.axis);
      });

      classObserver.observe(target, {
        attributes: true,
        attributeFilter: ['class'],
      });
    };

    const existing = document.querySelector<HTMLElement>(selector);
    if (existing) {
      watchClassChanges(existing);
    } else {
      domObserver = new MutationObserver(() => {
        const found = document.querySelector<HTMLElement>(selector);
        if (found) {
          watchClassChanges(found);
          domObserver?.disconnect();
        }
      });

      domObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      classObserver?.disconnect();
      domObserver?.disconnect();
    };
  }, [pageName, blockName, labelName, cases.chain, cases.axis]);

  let ListItem = axisList[cases.axis];
  return (
    <header className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={`${axisClass[cases.axis]}`}>{axisMenus[cases.axis]}</ListItem>
    </header>
  );
};
export default HeaderSwipe;
