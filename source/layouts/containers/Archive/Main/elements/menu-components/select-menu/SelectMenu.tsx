//--|🠊 SelectMenu.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './SelectMenu.scss';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../../../../scripts/archive';
import { stripBrackets } from '../../../../../../../scripts';
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

  useEffect(() => {}, [pageName, blockName, labelName]);

  let view: Array<{ labelName: string; imageLink: string }> = [
    {
      labelName: 'overtime',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium') as string,
    },
    {
      labelName: 'ticketing',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium') as string,
    },
    {
      labelName: 'hyperlink',
      imageLink: loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium') as string,
    },
  ];
  return (
    <aside className="select-menu">
      <section className={`${blockName}-foreground`}>
        <MenuSelect
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
        />
        <MenuSelect
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
        />
        <MenuSelect
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
        />
        <MenuSelect
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
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<SelectMenu>`}</h1>
      </div>
    </aside>
  );
};
export default SelectMenu;
