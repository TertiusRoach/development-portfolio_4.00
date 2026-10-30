//--|🠊 SectionElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import CharactersSection from './characters-section/CharactersSection';
import DemonstrationSection from './demonstration-section/DemonstrationSection';

//--|🠋 Functions 🠋|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function SectionElements({ info }: InfoProps) {
  return (
    <section className={`${info.labelName}-${info.blockName}`}>
      <DivisionFullscreen
        cases={{
          show: 2,
          axis: '[x]',
          call: SectionComponents as React.ComponentType<InfoProps>,
        }}
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: info.labelName,
        }}
      />
    </section>
  );
}

const SectionComponents: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName;
  const labelName = info.labelName as 'section';
  const pageName = info.pageName;
  return (
    <>
      <CharactersSection info={{ labelName: 'characters' as string, pageName: pageName, blockName: blockName }} />
      <DemonstrationSection info={{ labelName: 'demonstration' as string, pageName: pageName, blockName: blockName }} />
    </>
  );
};
export default SectionElements;
