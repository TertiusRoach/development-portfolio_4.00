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
  /**
   * Finally done transferring the data for all the characters. That was a lot of work.
   * Anyway, randomize a number between 1 and 18
   * Formula: 100% / 18 = 5.55555555556 percent chance to hit each character.
   * Then pass it through to the cases.profile before loading.
   */
  return (
    <aside className="characters-section">
      <section className={`${blockName}-foreground`}>
        <SectionCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          cases={{
            profile: (Math.floor(Math.random() * 18) + 1) as number,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default CharactersSection;
