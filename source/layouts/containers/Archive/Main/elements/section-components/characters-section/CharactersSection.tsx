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
function CharactersSection({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';
  //--|🠊 Random shade, so both are tested; the [components] page shows in mono 🠈|--\\
  const shades = ['~dark~', '~light~'] as const;
  return (
    <aside className="characters-section">
      <section className={`${blockName}-foreground`}>
        <SectionCharacters
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: shades[Math.floor(Math.random() * shades.length)],
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
