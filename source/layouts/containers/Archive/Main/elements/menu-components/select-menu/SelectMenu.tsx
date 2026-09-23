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
    stylePages: number;
    styleSize: Array<'<h1>' | '<h4>' | '<p>'>;
    styleImage: Array<string>;
  } = {
    stylePages: 3,
    styleSize: ['<h1>', '<h4>', '<p>'],
    styleImage: [
      loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
      loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
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
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-middle' as string,
            }}
            style={{
              align: '-mid-',
              view: 'mid-cen',
              color: '(mono)',
              shade: '~light~',

              image: casesPages.styleImage as Array<string>,
              size: casesPages.styleSize as Array<'<h1>' | '<h4>' | '<p>'>,
            }}
            cases={{
              pages: 3,
              axis: '[x]',
            }}
          />
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-right' as string,
            }}
            style={{
              align: '-rig-',
              view: 'top-cen',
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
        <div className="vert-select">
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-top' as string,
            }}
            style={{
              align: '-top-',
              view: 'mid-lef',
              color: '(mono)',
              shade: '~light~',

              image: casesPages.styleImage as Array<string>,
              size: casesPages.styleSize as Array<'<h1>' | '<h4>' | '<p>'>,
            }}
            cases={{
              axis: '[y]',
              pages: casesPages.stylePages as number,
            }}
          />
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-center' as string,
            }}
            style={{
              align: '-cen-',
              view: 'mid-cen',
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
              axis: '[y]',
            }}
          />
          <MenuSelect
            info={{
              blockName: blockName as 'main',
              pageName: pageName as 'components',
              labelName: 'standard-bottom' as string,
            }}
            style={{
              align: '-bot-',
              view: 'mid-rig',
              color: '(mono)',
              shade: '~light~',

              image: casesPages.styleImage as Array<string>,
              size: casesPages.styleSize as Array<'<h1>' | '<h4>' | '<p>'>,
            }}
            cases={{
              axis: '[y]',
              pages: casesPages.stylePages as number,
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default SelectMenu;
