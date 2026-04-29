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
    type: '{scroll}' | string;
    axis: '[x]' | '[y]';
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
  return (
    <>
      <li className={`${info.labelName}-${info.blockName}_preview I`}>
        {cases.paths.map((path, index) => {
          const [boldText, italicText] = String(path).split('_');
          return (
            <div key={index}>
              <h1>
                <span>
                  <b>{boldText}</b>
                  <i>{italicText}</i>
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
        <div className="next-view highlight">
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
