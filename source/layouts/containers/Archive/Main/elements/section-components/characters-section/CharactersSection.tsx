//--|🠊 CharactersSection.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './CharactersSection.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import SectionCharacters from '../../../../../../components/Section/characters/Section.characters';

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const CharactersSection: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  console.log(`source/layouts/containers/Archive/Main/Elements/section-components`);

  return (
    <aside className="characters-section">
      <section className={`${blockName}-foreground`}>
        <SectionCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default CharactersSection;
