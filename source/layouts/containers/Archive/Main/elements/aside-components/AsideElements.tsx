//--|🠊 AsideElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './AsideElements.scss';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import CharactersAside from './characters-aside/CharactersAside';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function AsideComponents({ info }: InfoProps) {
  const pageName = info.pageName;
  const blockName = info.blockName;
  const labelName = info.labelName;
  return (
    <>
      <CharactersAside info={{ labelName: 'characters' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
}
const AsideElements: React.FC<InfoProps> = ({ info }) => {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 1,
          axis: '[x]',
          call: AsideComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
};

export default AsideElements;
