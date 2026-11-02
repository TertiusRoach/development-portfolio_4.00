//--|🠊 CharactersAside.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import AsideCharacters from '../../../../../../components/Aside/characters/Aside.characters';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { stripBrackets, checkScreen } from '../../../../../../../scripts';
import { toggleColors } from './CharactersFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function CharactersAside({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="characters-aside">
          <section className={`${blockName}-foreground`}>
            <AsideCharacters
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                view: '-left-',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
              }}
            />
            <DivisionColourize
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~dark~',
              }}
              cases={{
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <AsideCharacters> with the tint from the toggles 🠈|--\\
              }}
            />
            <AsideCharacters
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                view: '-right-',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <section className="left-side"></section>
            <section className="right-side"></section>
          </div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="characters-aside">
          <section className={`${blockName}-foreground`}>
            <AsideCharacters
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                view: '-left-',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
              }}
            />
            <DivisionColourize
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                shade: '~dark~',
              }}
              cases={{
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <AsideCharacters> with the tint from the toggles 🠈|--\\
              }}
            />
            <AsideCharacters
              info={{
                pageName: pageName,
                blockName: blockName,
                labelName: labelName,
              }}
              style={{
                view: '-right-',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
              }}
            />
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}>
            <section className="left-side"></section>
            <section className="right-side"></section>
          </div>
        </aside>
      );
  }
}
export default CharactersAside;
