//--|🠊 StretchButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './StretchButton.scss';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const StretchButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'profile';

  return (
    <section className={`${labelName}-button`}>
      <section className={`${blockName}-foreground`}>
        <h1 className="display-1">{`<StretchButtonComponents>`}</h1>
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </section>
  );
};
export default StretchButton;
