//--|🠊 RoutingButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './RoutingButton.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const RoutingButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'routing';

  return (
    <aside className={`${labelName}-button`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<RoutingButtonComponents>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default RoutingButton;
