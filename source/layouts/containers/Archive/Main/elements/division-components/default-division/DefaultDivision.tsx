//--|🠊 DefaultDivision.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultDivision.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
const DefaultDivision: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';

  return (
    <aside className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<DefaultDivision>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default DefaultDivision;
