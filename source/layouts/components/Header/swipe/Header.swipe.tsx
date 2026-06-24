//--|🠊 Header.swipe.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\

//--|🠋 Functions 🠋|--\\
import eventListen from '../../components';
import { markCarousel, loadCarousel, swipeCarousel } from './Header_swipe';
import stripBrackets, { arabicToRoman, romanToArabic } from '../../../../scripts';

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

  useEffect(() => {
    /*--|🠋
        
    🠉|--*/
    let selector: string;
    const chainBlock: string = stripBrackets(cases.chain, '<>');
    switch (cases.axis) {
      case '[x]':
        selector = (`#${pageName}-${chainBlock} menu[class*="${chainBlock}"] ` +
          `ul[class*="hori-X"] li[class*="showing-horizontal"]`) as string;
        return eventListen(
          selector as string,

          () => {
            markCarousel(pageName, blockName, labelName, cases.chain, cases.axis);
          },
        );
      case '[y]':
        selector = (`#${pageName}-${chainBlock} menu[class*="${chainBlock}"] ` +
          `ol[class*="vert-Y"] li[class*="showing-vertical"]`) as string;
        return eventListen(
          selector as string,

          () => {
            markCarousel(pageName, blockName, labelName, cases.chain, cases.axis);
          },
        );
    }
  }, [pageName, blockName, labelName]);

  let ListItem = axisList[cases.axis];
  const axisMenus: Record<TheseProps['cases']['axis'], JSX.Element> = {
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

  return (
    <header className={`${labelName}-${blockName}_swipe-default`}>
      <ListItem className={`${axisClass[cases.axis]}`}>{axisMenus[cases.axis]}</ListItem>
    </header>
  );
};
export default HeaderSwipe;
