//--|🠊 StretchButton.tsx 🠈|--\\
//--|🠊 AI Code: Review Please 2026-10-31 11:32 · Copied from <DefaultButton>, only the names changed 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';
import ButtonStretch from '../../../../../../components/Button/stretch/Button.stretch';
import LabelSwitching from '../../../../../../components/Label/switching/Label.switching';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Functions 🠋|--\\
import copyCode, { toggleColors, toggleClarity } from './StretchFunctions';
import { checkScreen, loadAsset } from '../../../../../../../scripts';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function StretchButton({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'stretch';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let startingPreview = 3 as number;
  let casesPages = ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>'] as Array<string>;
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="stretch-button">
          <section className={`${blockName}-foreground`}>
            <DivisionFullscreen
              //--|🠊 <div class="darkside-main_fullscreen-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: startingPreview as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'stretch-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              /*
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
              }}
              */
            />
            <MenuScroll
              //--|🠊 <menu class="stretch-darkside-main_swipe-default"/> 🠈|--\\
              info={{
                labelName: 'stretch-darkside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~dark~',
              }}
              cases={{
                axis: '[y]',
                titles: casesPages as Array<string>,
              }}
            />
            <fieldset
              className="clarify-darkside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 AI Code: Review Please 2026-10-31 · The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-dark',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true, //--|🠈 AI Code: Review Please 2026-10-31 12:05 · ⟨opaque⟩ is <ButtonStretch>'s default here 🠈|--\\
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonStretch> with the tint from the toggles 🠈|--\\
              }}
            />

            <DivisionFullscreen
              //--|🠊 <div class="lightside-main_fullscreen-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: startingPreview as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'stretch-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              /*
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
              }}
              */
            />
            <MenuScroll
              //--|🠊 <menu class="stretch-lightside-main_swipe-default"/> 🠈|--\\
              info={{
                labelName: 'stretch-lightside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~light~',
              }}
              cases={{
                axis: '[y]',
                titles: casesPages as Array<string>,
              }}
            />
            <fieldset
              className="clarify-lightside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 AI Code: Review Please 2026-10-31 · The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-light',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true, //--|🠈 AI Code: Review Please 2026-10-31 12:05 · ⟨opaque⟩ is <ButtonStretch>'s default here 🠈|--\\
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
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
          <div className={`${blockName}-background`}>
            <section className="left-side"></section>
            <section className="right-side"></section>
          </div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="stretch-button">
          <section className={`${blockName}-foreground`}>
            <DivisionFullscreen
              //--|🠊 <div class="darkside-main_fullscreen-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: startingPreview as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'stretch-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              /*
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
              }}
              */
            />
            <MenuScroll
              //--|🠊 <menu class="stretch-darkside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'stretch-darkside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-cen-',
                color: '(mono)',
                shade: '~dark~',
              }}
              cases={{
                axis: '[x]',
                titles: casesPages as Array<string>,
              }}
            />
            <fieldset
              className="clarify-darkside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 AI Code: Review Please 2026-10-31 · The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-dark',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true, //--|🠈 AI Code: Review Please 2026-10-31 12:05 · ⟨opaque⟩ is <ButtonStretch>'s default here 🠈|--\\
                  type: '{option}',
                }}
                style={{
                  shade: '~dark~',
                  color: '(mono)',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonStretch> with the tint from the toggles 🠈|--\\
              }}
            />

            <DivisionFullscreen
              //--|🠊 <div class="lightside-main_fullscreen-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: startingPreview as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'stretch-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              /*
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
              }}
              */
            />
            <MenuScroll
              //--|🠊 <menu class="stretch-lightside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'stretch-lightside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-cen-',
                color: '(mono)',
                shade: '~light~',
              }}
              cases={{
                axis: '[x]',
                titles: casesPages as Array<string>,
              }}
            />
            <fieldset
              className="clarify-lightside"
              onChange={(event: React.FormEvent<HTMLFieldSetElement>): void => {
                //--|🠊 AI Code: Review Please 2026-10-31 · The radio's change bubbles up to the <fieldset>, which hands itself to toggleClarity() 🠈|--\\
                toggleClarity(event.currentTarget);
              }}
            >
              <LabelSwitching
                cases={{
                  mark: false,
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨lucid⟩',
                  text: 'Lucid', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
                }}
                info={{
                  pageName: pageName,
                  blockName: blockName,
                  labelName: 'lucid-light',
                }}
              />
              <LabelSwitching
                cases={{
                  mark: true, //--|🠈 AI Code: Review Please 2026-10-31 12:05 · ⟨opaque⟩ is <ButtonStretch>'s default here 🠈|--\\
                  type: '{option}',
                }}
                style={{
                  color: '(mono)',
                  shade: '~light~',
                  clarity: '⟨opaque⟩',
                  text: 'Opaque', //--|🠈 AI Code: Review Please 2026-10-31 · {option}: the value toggleClarity() reads, and what a screen reader says 🠈|--\\
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
          <div className={`${blockName}-background`}>
            <section className="top-stack"></section>
            <section className="bot-stack"></section>
          </div>
        </aside>
      );
  }
}

const ButtonsDarkside: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <ViewOne
        info={{
          labelName: 'one-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewTwo
        info={{
          labelName: 'two-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewThr
        info={{
          labelName: 'thr-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewFou
        info={{
          labelName: 'fou-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewFiv
        info={{
          labelName: 'fiv-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewSix
        info={{
          labelName: 'six-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewSev
        info={{
          labelName: 'sev-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
};
const ButtonsLightside: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <ViewOne
        info={{
          labelName: 'one-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewTwo
        info={{
          labelName: 'two-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewThr
        info={{
          labelName: 'thr-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewFou
        info={{
          labelName: 'fou-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewFiv
        info={{
          labelName: 'fiv-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewSix
        info={{
          labelName: 'six-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewSev
        info={{
          labelName: 'sev-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
};

let ViewOne = ({ info }: InfoProps) => {
  const iconOne = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h1') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
let ViewTwo = ({ info }: InfoProps) => {
  const iconTwo = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h2') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
let ViewThr = ({ info }: InfoProps) => {
  const iconThr = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h3') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',
              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
let ViewFou = ({ info }: InfoProps) => {
  const iconFou = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h4') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
        </section>
      );
  }
};
let ViewFiv = ({ info }: InfoProps) => {
  const iconFiv = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h5') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
let ViewSix = ({ info }: InfoProps) => {
  const iconSix = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h6') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
let ViewSev = ({ info }: InfoProps) => {
  const iconPar = loadAsset('-svg-', '/project-pages/components-page/default-buttons/p') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~dark~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case info.labelName.includes('light'):
      return (
        <section className={`stretch-${info.blockName}_${info.labelName}`}>
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonStretch
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~light~',
              clarity: '⟨opaque⟩',
              color: '(mono)',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
  }
};
export default StretchButton;
