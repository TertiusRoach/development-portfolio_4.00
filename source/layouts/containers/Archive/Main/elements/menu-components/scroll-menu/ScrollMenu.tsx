//--|🠊 ScrollMenu.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './ScrollMenu.scss';

//--|🠋 Functions 🠋|--\\
import { togglePreview } from './ScrollFunctions';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const ScrollMenu: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'swipe';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    togglePreview();
  }, [pageName, blockName, labelName]);

  return (
    <aside className="scroll-menu">
      <section className={`${blockName}-foreground`}></section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<ScrollMenu>`}</h1>
      </div>
    </aside>
  );
};
export default ScrollMenu;
