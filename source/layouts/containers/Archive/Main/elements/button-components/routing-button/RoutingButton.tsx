//--|🠊 RoutingButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';
import ButtonRouting from '../../../../../../components/Button/routing/Button.routing';
import DivisionColourize from '../../../../../../components/Division/colourize/Division.colourize';
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './RoutingFunctions';
import { checkScreen, loadAsset } from '../../../../../../../scripts';

//--|🠋 Styles 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function RoutingButton({ info }: InfoProps) {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'routing';
  const pageName = info.pageName as 'component';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let casesShow = 1 as number;
  let casesPages = ['<h1>', , '<h4>', '<p>'] as Array<string>;
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="routing-button">
          <section className={`${blockName}-foreground`}>
            <MenuScroll
              //--|🠊 <menu class="routing-darkside-main_swipe-default"/> 🠈|--\\
              info={{
                labelName: 'routing-darkside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              cases={{
                axis: '[y]',
                titles: casesPages as Array<string>,
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~dark~',
              }}
            />
            <DivisionFullscreen
              //--|🠊 <div class="routing-darkside-main_fullscreen-default"/> 🠈|--\\
              info={{
                labelName: 'routing-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                /*
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
                */
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonRouting> with the tint from the toggles 🠈|--\\
              }}
            />

            <MenuScroll
              //--|🠊 <menu class="routing-lightside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'routing-lightside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              cases={{
                axis: '[y]',
                titles: casesPages as Array<string>,
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~light~',
              }}
            />
            <DivisionFullscreen
              //--|🠊 <div class="routing-lightside-main_fullscreen-default"/> 🠈|--\\
              info={{
                labelName: 'routing-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                /*
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
                */
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
        <aside className="routing-button">
          <section className={`${blockName}-foreground`}>
            <MenuScroll
              //--|🠊 <menu class="routing-darkside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'routing-darkside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              cases={{
                axis: '[x]',
                titles: casesPages as Array<string>,
              }}
              style={{
                view: '-cen-',
                color: '(mono)',
                shade: '~dark~',
              }}
            />
            <DivisionFullscreen
              //--|🠊 <div class="routing-darkside-main_fullscreen-default"/> 🠈|--\\
              info={{
                labelName: 'routing-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                /*
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
                */
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
                task: [(tint) => toggleColors(tint)], //--|🠈 Recolors <ButtonRouting> with the tint from the toggles 🠈|--\\
              }}
            />

            <MenuScroll
              //--|🠊 <menu class="routing-lightside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'routing-lightside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              cases={{
                axis: '[x]',
                titles: casesPages as Array<string>,
              }}
              style={{
                view: '-cen-',
                color: '(mono)',
                shade: '~light~',
              }}
            />
            <DivisionFullscreen
              //--|🠊 <div class="routing-lightside-main_fullscreen-default"/> 🠈|--\\
              info={{
                labelName: 'routing-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
              }}
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
                /*
                if (event.deltaY < 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
                } else if (event.deltaY > 0) {
                  scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
                }
                 */
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
//--|===|--\\
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
      <ViewFou
        info={{
          labelName: 'fou-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewPar
        info={{
          labelName: 'par-dark',
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
      <ViewFou
        info={{
          labelName: 'fou-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
      <ViewPar
        info={{
          labelName: 'par-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
};
//--|===|--\\
let ViewOne = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  switch (true) {
    case shade.includes('dark'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
        </section>
      );
    case shade.includes('light'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h1>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
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
};
let ViewFou = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  switch (true) {
    case shade.includes('dark'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
        </section>
      );
    case shade.includes('light'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<h4>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
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
};
let ViewPar = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  switch (true) {
    case shade.includes('dark'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~dark~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
        </section>
      );
    case shade.includes('light'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-down'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'top-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/star'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'mid-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-lef',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-right'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-cen',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-up'),
            }}
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
          />
          <ButtonRouting
            style={{
              size: '<p>',
              color: '(mono)',
              shade: '~light~',
              clarity: '⟨lucid⟩',
              view: 'bot-rig',
              image: loadAsset('-svg-', '/archive-images/font-awesome/5.13.0/solid/arrow-circle-left'),
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
};
export default RoutingButton;
