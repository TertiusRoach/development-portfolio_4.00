//--|🠊 RoutingButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './RoutingButton.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    blockName: 'main' | string;
    labelName: 'routing' | string;
    pageName: 'component' | string;
  };
}
const RoutingButton: React.FC<InfoProps> = ({ info }) => {
  const labelName = info.labelName as 'routing';
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'component';

  return (
    <aside className={`${labelName}-${blockName}`}>
      <section className="default-foreground">
        <h1 className="display-1">{`<RoutingButton>`}</h1>
      </section>
      <figure className="default-midground"></figure>
      <div className="default-background"></div>
    </aside>
  );
};
export default RoutingButton;
