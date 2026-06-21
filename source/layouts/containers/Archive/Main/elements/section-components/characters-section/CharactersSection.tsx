//--|🠊 CharactersSection.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './CharactersSection.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';
import SectionProfiles from '../../../../../../components/Section/characters/Section.characters';

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
  return (
    <aside className="characters-section">
      <section className={`${blockName}-foreground`}>
        <SectionProfiles
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}>
        <h1 className="display-1">{`<CharactersSection>`}</h1>
      </div>
    </aside>
  );
};
export default CharactersSection;
