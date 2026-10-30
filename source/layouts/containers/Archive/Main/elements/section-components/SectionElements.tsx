//--|🠊 SectionElements.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Elements 🠋|--\\
import CharactersSection from './characters-section/CharactersSection';
import DemonstrationSection from './demonstration-section/DemonstrationSection';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../scripts'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function SectionElements({ info }: InfoProps) {
  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as 'main'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const labelName = stripBrackets(info.labelName, '()') as 'section'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  const pageName = stripBrackets(info.pageName, '[]') as 'components'; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\

  //--|🠊 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  useEffect(() => {
    //--|🟨|--\\
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 2 as number; //--|🠈 AI Code: Review Please 2026-10-30 13:04 🠈|--\\
  return (
    <section className={`${labelName}-${blockName}`}>
      <DivisionFullscreen
        cases={{
          axis: '[x]',
          show: startingPreview,
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
