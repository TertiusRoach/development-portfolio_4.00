//--|🠊 CharactersAside.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import AsideCharacters from '../../../../../../components/Aside/characters/Aside.characters';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../tools/conversions';
import { checkScreen } from '../../../../../../tools/synching';
import { toggleColors, toggleClarity } from './CharactersFunctions';

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
  useEffect(() => {
    const colourizeDivisions = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="characters-aside"] div[class*="_division-colourize"]`,
    ) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < colourizeDivisions.length; i++) {
      colourizeDivisions[i].classList.add('downplay');
    }
  }, [getOrientation]);

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
                clarity: '⟨opaque⟩',
              }}
            />
            <fieldset
              className="clarify-clarity"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  view: 'mid-lef',
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-dark',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
                  view: 'mid-rig',
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opaque-light',
                }}
              />
            </fieldset>
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
                clarity: '⟨opaque⟩',
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
                clarity: '⟨opaque⟩',
              }}
            />
            <fieldset
              className="clarify-clarity"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  view: 'mid-lef',
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-dark',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
                  view: 'mid-rig',
                  shade: '~light~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opaque-light',
                }}
              />
            </fieldset>
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
                clarity: '⟨opaque⟩',
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
