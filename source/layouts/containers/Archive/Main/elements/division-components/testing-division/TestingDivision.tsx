//--|🠊 TestingDivision.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './TestingDivision.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import DivisionTesting from '../../../../../../components/Division/testing/Division.testing';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}
const TestingDivision: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'testing';
  const pageName = info.pageName as 'components';

  return (
    <aside className="testing-division">
      <section className={`${blockName}-foreground`}>
        <DivisionTesting
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(mono)',
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default TestingDivision;
