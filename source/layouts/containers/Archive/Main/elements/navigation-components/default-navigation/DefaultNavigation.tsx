//--|🠊 DefaultNavigation.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import NavigationDefault from '../../../../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { checkScreen, loadAsset } from '../../../../../../../scripts';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function DefaultNavigation({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let imageLink = loadAsset('-svg-', '/archive-images/font-awesome/7.3.1/solid/star') as string;
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="default-navigation">
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-main_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                shade: '~light~',
                view: undefined,
                image: undefined,
              }}
              cases={{
                view: ['top-lef', 'top-rig', 'bot-rig', 'bot-lef'],
                image: [imageLink, imageLink, imageLink, imageLink],
                tasks: '',
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}>
            <canvas></canvas>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="default-navigation">
          <section className={`${blockName}-foreground`}>
            <NavigationDefault
              //--|🠊 <nav class="default-main_navigation-default"/> 🠈|--\\
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                color: '(mono)',
                shade: '~light~',
                view: undefined,
                image: undefined,
              }}
              cases={{
                view: ['top-lef', 'top-rig', 'bot-rig', 'bot-lef'],
                image: [imageLink, imageLink, imageLink, imageLink],
                tasks: '',
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}>
            <canvas></canvas>
          </figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default DefaultNavigation;
