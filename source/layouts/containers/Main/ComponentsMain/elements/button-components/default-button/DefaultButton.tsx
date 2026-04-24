//--|🠊 DefaultButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    blockName: 'main' | string;
    labelName: 'default' | string;
    pageName: 'component' | string;
  };
}
const DefaultButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = stripBrackets(info.blockName, '<>') as 'main';
  const pageName = stripBrackets(info.pageName, '[]') as 'component';
  const labelName = info.labelName as 'default';

  return (
    <aside className={`${labelName}-${blockName}`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default DefaultButton;
