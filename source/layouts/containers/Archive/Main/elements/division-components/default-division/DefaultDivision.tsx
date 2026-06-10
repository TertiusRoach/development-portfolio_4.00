//--|🠊 DefaultDivision.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultDivision.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import DivisionDefault from '../../../../../../components/Division/default/Division.default';

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
    <aside className="default-division">
      <section className={`${blockName}-foreground`}>
        <DivisionDefault
          info={{
            pageName: info.pageName,
            blockName: info.blockName,
            labelName: info.labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}>
        <h1 className="display-1">{`<DefaultDivision>`}</h1>
      </figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default DefaultDivision;
