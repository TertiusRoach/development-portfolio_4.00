//--|🠊 CharactersSection.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect } from 'react';

//--|🠋 Components 🠋|--\\
import SectionCharacters from '../../../../../../components/Section/characters/Section.characters';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../tools/conversions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function CharactersSection({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <aside className="characters-section">
      <section className={`${blockName}-foreground`}>
        <SectionCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'dark-card',
          }}
          style={{
            shade: '~dark~',
            color: '(mono)',
          }}
          cases={{
            characters: [
              'jane',
              'malik',
              'dimitri',
              'dale',
              'alaric',
              'conrad',
              'daniel',
              'kady',
              'seamus',
              'hammad',
              'tasneem',
              'elliot',
              'sipho',
              'zuberi',
              'nyra',
              'victor',
              'danish',
              'aelin',
              'random',
            ],
          }}
        />
        <SectionCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: 'light-card',
          }}
          style={{
            shade: '~light~',
            color: '(mono)',
          }}
          cases={{
            characters: [
              'jane',
              'malik',
              'dimitri',
              'dale',
              'alaric',
              'conrad',
              'daniel',
              'kady',
              'seamus',
              'hammad',
              'tasneem',
              'elliot',
              'sipho',
              'zuberi',
              'nyra',
              'victor',
              'danish',
              'aelin',
              'random',
            ],
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}
export default CharactersSection;
