//--|🠊 SwipeMenu.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './SwipeMenu.scss';

//--|🠋 Functions 🠋|--\\
import { togglePreview } from './SwipeFunctions';
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const SwipeMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'swipe';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    togglePreview();
  }, [pageName, blockName, labelName]);

  return (
    <aside className="swipe-menu">
      <section className={`${blockName}-foreground`}>
        <div className="horizontal">
          <MenuSwipe
            style={{ color: '(mono)', shade: '~dark~' }}
            info={{ labelName: labelName, pageName: pageName, blockName: blockName }}
            cases={{
              show: 0,
              axis: '[x]',
              pages: ['<Menu_Swipe>'] as Array<string>,
            }}
          />
        </div>
        <div className="vertical">
          <MenuSwipe
            style={{ color: '(mono)', shade: '~dark~' }}
            info={{ labelName: labelName, pageName: pageName, blockName: blockName }}
            cases={{
              show: 0,
              axis: '[y]',
              pages: ['<Menu_Swipe>'] as Array<string>,
            }}
          />
        </div>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<SwipeMenu>`}</h1>
      </div>
    </aside>
  );
};
export default SwipeMenu;
