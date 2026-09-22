//--|🠊 SelectMenu.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './SelectMenu.scss';

//--|🠋 Functions 🠋|--\\
import { functionHolder } from './SelectFunctions';
import { loadAsset } from '../../../../../../../scripts';
import MenuSelect from '../../../../../../components/Menu/select/Menu.select';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SelectMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'select';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    functionHolder();
  }, [pageName, blockName, labelName]);

  const casesPages: {
    styleSize: Array<'<h1>' | '<h4>' | '<p>'>;
    styleImage: Array<string>;
  } = {
    styleSize: ['<h1>', '<h4>', '<p>'],
    styleImage: [
      loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
    ],
  };
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');

  return (
    <aside className="select-menu">
      <section className={`${blockName}-foreground`}>
        <div className="hori-select">
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-left' as string,
            }}
            style={{
              align: '-lef-',
              view: 'bot-cen',
              color: '(mono)',
              shade: '~dark~',

              image: casesPages.styleImage as Array<string>,
              size: casesPages.styleSize as Array<'<h1>' | '<h4>' | '<p>'>,

              /*
              size: '<h4>',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy'),
              */
            }}
            cases={{
              pages: 3,
              axis: '[x]',
            }}
          />
        </div>
        <div className="vert-select"></div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default SelectMenu;
