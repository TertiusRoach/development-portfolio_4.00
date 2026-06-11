//--|🠊 Footer.applications.tsx 🠈|--\\

//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonRouting from '../../Button/routing/Button.routing';

//--|🠋 Functions 🠋|--\\
import { togglePages } from './Footer_applications';

//--|🠋 Styles 🠋|--\\
import './Footer.applications.scss';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };

  onClick?: () => void;
  onMouseEnter?: () => void;
}
const FooterApplications: React.FC<TheseProps> = ({ info }) => {
  const pageName: string = info.pageName as string;
  const blockName: string = info.blockName as string;
  const labelName: string = info.labelName as string;

  /*--|🠋
  
  🠉|--*/

  useEffect(() => {}, [pageName, blockName, labelName]);

  let link =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1';
  return (
    <footer className={`default-${blockName}_applications-default`}>
      <div className="select-application">
        <ButtonRouting
          style={{
            size: '<h1>',
            view: 'bot-cen',
            color: '(green)',
            shade: '~light~',
            type: '{button}',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/track-a-day/primary-medium.svg` as string,
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
            labelName: `${pageName}-overtime`,
          }}
          onClick={() => {
            togglePages(pageName, 'overtime');
          }}
        />
        <ButtonRouting
          style={{
            size: '<h1>',
            view: 'bot-cen',
            color: '(blue)',
            shade: '~light~',
            type: '{button}',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/log-a-ticket/primary-medium.svg` as string,
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
            labelName: `${pageName}-ticketing`,
          }}
          onClick={() => {
            togglePages(pageName, 'ticketing');
          }}
        />
        <ButtonRouting
          style={{
            size: '<h1>',
            view: 'bot-cen',
            color: '(red)',
            shade: '~light~',
            type: '{button}',
            image: `${link}/source/assets/svg-files/archive-images/trinity-apps/find-a-link/primary-medium.svg` as string,
          }}
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
            labelName: `${pageName}-hyperlink`,
          }}
          onClick={() => {
            togglePages(pageName, 'hyperlink');
          }}
        />
      </div>
    </footer>
  );
};
export default FooterApplications;
