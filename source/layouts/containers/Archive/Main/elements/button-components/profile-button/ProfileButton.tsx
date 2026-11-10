//--|🠊 ProfileButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import ButtonProfile from '../../../../../../components/Button/profile/Button.profile';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';

//--|🠋 Functions 🠋|--\\
import { toggleColors, toggleClarity } from './ProfileFunctions';
import { checkScreen } from '../../../../../../tools/synching';
import { loadAsset } from '../../../../../../tools/utilities';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function ProfileButton({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'profile';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);
  useEffect(() => {
    const colourizeDivisions = document.querySelectorAll(
      `#${pageName}-${blockName} aside[class="profile-button"] div[class*="_division-colourize"]`,
    ) as NodeListOf<HTMLDivElement>;
    for (let i = 0; i < colourizeDivisions.length; i++) {
      colourizeDivisions[i].classList.add('downplay');
    }
  }, [getOrientation]);

  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="profile-button">
          <section className={`${blockName}-foreground`}>
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <fieldset
              className="clarify-darkside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
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
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opaque-dark',
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonProfile> with the tint from the toggles 🠈|--\\
              }}
            />

            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <fieldset
              className="clarify-lightside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-light',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
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
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="profile-button">
          <section className={`${blockName}-foreground`}>
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~dark~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <fieldset
              className="clarify-darkside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
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
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'opaque-dark',
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonProfile> with the tint from the toggles 🠈|--\\
              }}
            />

            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-square-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h1>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<h4>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <ButtonProfile
              info={{ pageName: info.pageName, blockName: info.blockName }}
              style={{
                size: '<p>',
                color: '(mono)',
                shade: '~light~',
                clarity: '⟨lucid⟩',
                view: '-circle-',
                image: loadAsset('-png-', '/character-testing/original/randomize-character'),
              }}
            />
            <fieldset
              className="clarify-lightside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: true,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-light',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
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
          </section>
          <figure className={`${blockName}-midground`}></figure>
          <div className={`${blockName}-background`}></div>
        </aside>
      );
  }
}
export default ProfileButton;
