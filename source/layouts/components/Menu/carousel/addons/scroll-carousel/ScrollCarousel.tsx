//--|🠊 ScrollCarousel.tsx 🠈|--\\
//--|🠋 Functions 🠋|--\\
import scrollCarousel from './Scroll_carousel';
import { arabicToRoman } from '../../../../functions';

//--|🠋 Components 🠋|--\\
import ButtonDefault from '../../../../Button/default/Button.default';

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    axis: '[x]' | '[y]';
    type: '{scroll}' | string;
    shade: '~dark~' | '~medium~' | '~light~';
    view: '-top-' | '-rig-' | '-bot-' | '-lef-';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };
  cases: {
    paths: Array<string | HTMLElement>;
  };

  onClick?: () => number;
}

const ScrollCarousel: React.FC<TheseProps> = ({ info, style, cases }) => {
  const svgIcons: Array<string> = [
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/index-page/rightbar/rightbar-dark.svg',
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/index-page/leftbar/leftbar-dark.svg',
  ];

  useEffect(() => {
    let pageName: string = info.pageName;
    let blockName: string = info.blockName;
    let labelName: string = info.labelName;
    /*--|🠋

    🠉|--*/
    const menuLocate: string = `#${pageName}-${blockName} menu.${labelName}-${blockName}_carousel`;
    const menuElement = document.querySelector(menuLocate) as HTMLElement;
    const menuContainer = menuElement.querySelector('li ul') as HTMLElement;
    let menuPreview = menuContainer.childNodes[0] as HTMLElement;
    let menuButtons = menuContainer.childNodes[1] as HTMLElement;

    if (menuPreview.childElementCount > 1) {
      console.log('WEIRD BUG!');
      var prevButton = menuButtons.querySelector('div[class*="prev"]') as HTMLElement;
      var nextButton = menuButtons.querySelector('div[class*="next"]') as HTMLElement;
      nextButton.classList.add('highlight');
      nextButton.classList.remove('downplay');
    }
  }, [info.pageName, info.blockName, info.labelName]);

  return (
    <>
      <li className={`${info.labelName}-${info.blockName}_preview I`}>
        {cases.paths.map((path, index) => {
          const [boldText, italText] = String(path).split('_');
          return (
            <div key={index}>
              <h1>
                <span>
                  <b>{boldText}</b>
                  <i>{italText}</i>
                </span>
              </h1>
            </div>
          );
        })}
      </li>
      <li className={`${info.labelName}-${info.blockName}_buttons`}>
        <div className="prev-view downplay">
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-icon-',
              color: style.color,
              shade: style.shade,
              type: '{button}',
              image: svgIcons[0] as string,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(): number => scrollCarousel(info.pageName, info.blockName, info.labelName, 'go-left')}
          />
        </div>
        <div className="next-view downplay">
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-icon-',
              color: style.color,
              shade: style.shade,
              type: '{button}',
              image: svgIcons[1] as string,
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            onClick={(): number => scrollCarousel(info.pageName, info.blockName, info.labelName, 'go-right')}
          />
        </div>
      </li>
    </>
  );
};

export default ScrollCarousel;
