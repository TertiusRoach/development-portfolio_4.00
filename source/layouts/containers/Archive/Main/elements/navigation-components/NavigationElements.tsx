//--|🠊 NavigationElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';
import NavigationDefault from '../../../../../components/Navigation/default/Navigation.default';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function NavigationElements({ info }: InfoProps) {
  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const labelName = stripBrackets(info.labelName, '()') as 'navigation'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'components'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 1 as number; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
          call: NavigationComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
}

const NavigationComponents: React.FC<InfoProps> = ({ info }) => {
  const labelName = 'default' as string;
  const blockName = info.blockName as 'main';
  const pageName = info.pageName as 'components';

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg' as string;
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
};
export default NavigationElements;
