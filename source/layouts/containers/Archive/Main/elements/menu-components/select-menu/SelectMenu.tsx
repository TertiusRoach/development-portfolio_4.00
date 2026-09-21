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
  let casesPages: Array<{ labelName: string; imageLink: string; styleSize: '<h1>' | '<h4>' | '<p>' }> = [
    {
      styleSize: '<h1>',
      labelName: 'overtime',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
    },
    {
      styleSize: '<h4>',
      labelName: 'ticketing',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium') as string,
    },
    {
      styleSize: '<p>',
      labelName: 'hyperlink',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium') as string,
    },
  ];
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="select-menu">
      <section className={`${blockName}-foreground`}>
        <div className="hori-select">
          <MenuSelect
            info={{
              labelName: 'menu' as string,
              blockName: blockName as 'main',
              pageName: pageName as 'components',
            }}
            style={{
              axis: '[x]',
              view: '-lef-',
              color: '(mono)',
              shade: '~dark~',
            }}
            cases={{
              buttons: casesPages as Array<{ labelName: string; imageLink: string; styleSize: '<h1>' | '<h4>' | '<p>' }>,
            }}
          />
        </div>
        <div className="vert-select"></div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        {/* <MenuSelect
          info={{
            labelName: 'menu' as string,
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[x]',
            color: '(mono)',
            view: 'top-cen',
            shade: '~dark~',
          }}
          cases={{
            show: 0,
            buttons: view as Array<{ labelName: string; imageLink: string }>,
          }}
        /> */}
        {/* <MenuSelect
          info={{
            labelName: 'menu' as string,
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[y]',
            color: '(mono)',
            view: 'mid-rig',
            shade: '~light~',
          }}
          cases={{
            show: 0,
            buttons: view as Array<{ labelName: string; imageLink: string }>,
          }}
        /> */}
        {/* <MenuSelect
          info={{
            labelName: 'menu' as string,
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[x]',
            color: '(mono)',
            view: 'bot-cen',
            shade: '~light~',
          }}
          cases={{
            show: 0,
            buttons: view as Array<{ labelName: string; imageLink: string }>,
          }}
        /> */}
        {/* <MenuSelect
          info={{
            labelName: 'menu' as string,
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
          style={{
            axis: '[y]',
            color: '(mono)',
            view: 'mid-lef',
            shade: '~dark~',
          }}
          cases={{
            show: 0,
            buttons: view as Array<{ labelName: string; imageLink: string }>,
          }}
        /> */}
      </div>
    </aside>
  );
};
export default SelectMenu;
