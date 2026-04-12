//--|🠊 Navigation.track-main.tsx 🠈|--\\
//--|🠋 Styles 🠋|--\\
import ButtonDefault from '../../Button/default/Button.default';
import './Navigation.track-main.scss';
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
  };
}
const TrackMain: React.FC<TheseProps> = ({ info }) => {
  const blockName: string = info.blockName as 'main';
  const pageName: string = info.pageName as 'overtime';

  useEffect(() => {}, [pageName, blockName]);

  return (
    <nav className="track-main">
      <ol>
        <li className="prev-week">
          <ButtonDefault
            style={{
              size: '<h1>',
              view: '-icon-',
              text: 'Down',
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/prev-week.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'view-previous',
            }}
          />
        </li>
        <li className="next-week">
          <ButtonDefault
            style={{
              size: '<h1>',
              view: '-icon-',
              text: 'Up',
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/next-week.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'view-future',
            }}
          />
        </li>
        <li className="request-leave">
          <ButtonDefault
            style={{
              size: '<h1>',
              view: '-center-',
              text: `Request`,
              shade: '~light~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'request-leave',
            }}
          />
        </li>
        <li className="ante-meridiem saturday">
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-center-',
              text: `Clock-in`,
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'clock-in',
            }}
          />
        </li>
        <li className="post-meridiem saturday">
          <ButtonDefault
            style={{
              size: '<h3>',
              view: '-center-',
              text: `Clock-out`,
              shade: '~dark~',
              color: '(mono)',

              type: '{button}',
              image:
                'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/b345dfe6d6c97c6cb19f6032c42ab41bd6776ac7/source/assets/svg-files/project-pages/overtime-page/%7Esort/clock-time.svg',
            }}
            info={{
              pageName: pageName,
              blockName: blockName,
              labelName: 'clock-out',
            }}
          />
        </li>
      </ol>
    </nav>
  );
};
export default TrackMain;
