//--|🠊 DefaultButton.tsx 🠈|--\\
//--|🠋 Dependencies 🠋|--\\
import React, { useEffect, useState } from 'react';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import MenuScroll from '../../../../../../components/Menu/scroll/Menu.scroll';
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';
import DivisionCarousel from '../../../../../../components/Division/carousel/Division.carousel';

//--|🠋 Functions 🠋|--\\
import loadAsset from '../../../../../../scripts/archive';
import { checkScreen } from '../../../../../../../scripts';
import copyCode, { toggleColors, scrollSide } from './DefaultFunctions';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function ButtonsDarkside({ info }: InfoProps) {
  return (
    <>
      <ViewOne
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'one-dark',
        }}
      />
      <ViewTwo
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'two-dark',
        }}
      />
      <ViewThr
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'thr-dark',
        }}
      />
      <ViewFou
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fou-dark',
        }}
      />
      <ViewFiv
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fiv-dark',
        }}
      />
      <ViewSix
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'six-dark',
        }}
      />
      <ViewSev
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'sev-dark',
        }}
      />
    </>
  );
}
function ButtonsLightside({ info }: InfoProps) {
  return (
    <>
      <ViewOne
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'one-light',
        }}
      />
      <ViewTwo
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'two-light',
        }}
      />
      <ViewThr
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'thr-light',
        }}
      />
      <ViewFou
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fou-light',
        }}
      />
      <ViewFiv
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'fiv-light',
        }}
      />
      <ViewSix
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'six-light',
        }}
      />
      <ViewSev
        info={{
          pageName: info.pageName,
          blockName: info.blockName,
          labelName: 'sev-light',
        }}
      />
    </>
  );
}

const DefaultButton: React.FC<InfoProps> = ({ info }) => {
  const [getOrientation, setOrientation] = useState<'landscape' | 'portrait'>(
    window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait',
  ); //--|🠈 Updates state when the orientation changes 🠈|--\\
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  useEffect(() => {
    return checkScreen(setOrientation);
  }, [pageName, blockName, labelName]);

  let casesShow = 7 as number;
  let casesPages = ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>'] as Array<string>;
  switch (getOrientation) {
    case 'landscape':
      return (
        <aside className="default-button">
          <section className={`${info.blockName}-foreground`}>
            <MenuScroll
              //--|🠊 <menu class="default-darkside-main_swipe-default"/> 🠈|--\\
              info={{
                labelName: 'default-darkside',
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
                pages: casesPages as Array<string>,
              }}
            />
            <DivisionCarousel
              //--|🠊 <div class="darkside-main_carousel-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'default-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
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

            <div
              className="toggle-colors"
              onClick={(event: React.MouseEvent<HTMLElement>): void => {
                toggleColors(event.currentTarget as HTMLElement);
              }}
            >
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(red)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(green)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(blue)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
            </div>

            <MenuScroll
              //--|🠊 <menu class="default-lightside-main_swipe-default"/> 🠈|--\\
              info={{
                labelName: 'default-lightside',
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
                pages: casesPages as Array<string>,
              }}
            />
            <DivisionCarousel
              //--|🠊 <div class="lightside-main_carousel-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'default-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
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
          <figure className={`${info.blockName}-midground`}></figure>
          <div className={`${info.blockName}-background`}>
            <section className="left-side"></section>
            <section className="right-side"></section>
          </div>
        </aside>
      );
    case 'portrait':
      return (
        <aside className="default-button">
          <section className={`${info.blockName}-foreground`}>
            <MenuScroll
              //--|🠊 <menu class="default-darkside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'default-darkside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~dark~',
              }}
              cases={{
                axis: '[x]',
                pages: casesPages as Array<string>,
              }}
            />
            <DivisionCarousel
              //--|🠊 <div class="darkside-main_carousel-default"/> 🠈|--\\
              cases={{
                axis: '[y]',
                show: casesShow as number,
                call: ButtonsDarkside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'default-darkside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
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

            <div
              className="toggle-colors"
              onClick={(event: React.MouseEvent<HTMLElement>): void => {
                toggleColors(event.currentTarget as HTMLElement);
              }}
            >
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(red)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(green)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
              <LabelToggle
                style={{ type: '{toggle}', shade: '~dark~', color: '(blue)' }}
                info={{ pageName: pageName, blockName: blockName, labelName: labelName }}
              />
            </div>

            <MenuScroll
              //--|🠊 <menu class="default-lightside-main_scroll-default"/> 🠈|--\\
              info={{
                labelName: 'default-lightside',
                blockName: blockName as 'main',
                pageName: pageName as 'components',
              }}
              style={{
                view: '-def-',
                color: '(mono)',
                shade: '~light~',
              }}
              cases={{
                axis: '[x]',
                pages: casesPages as Array<string>,
              }}
            />
            <DivisionCarousel
              //--|🠊 <div class="lightside-main_carousel-default"/> 🠈|--\\
              cases={{
                axis: '[x]',
                show: casesShow as number,
                call: ButtonsLightside as React.ComponentType<InfoProps>,
              }}
              info={{
                labelName: 'default-lightside',
                blockName: info.blockName as '<main>',
                pageName: info.pageName as '[components]',
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
          <figure className={`${info.blockName}-midground`}></figure>
          <div className={`${info.blockName}-background`}>
            <section className="left-side"></section>
            <section className="right-side"></section>
          </div>
        </aside>
      );
  }
};

let ViewOne = ({ info }: InfoProps) => {
  const iconOne = loadAsset('-svg-', '/project-pages/components-page/default-buttons/h1') as string;
  switch (true) {
    case info.labelName.includes('dark'):
      return (
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconOne as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h1>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',
              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconTwo as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h2>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconThr as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h3>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFou as string,
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h4>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconFiv as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h5>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconSix as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<h6>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~dark~',
              color: '(mono)',
              type: '{button}',
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
        <section className={`default-${info.blockName}_${info.labelName}`}>
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-top-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-bottom-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-left-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-right-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-center-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-text-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
              text: 'Button Here',

              image: iconPar as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
          <ButtonDefault
            info={{
              pageName: info.pageName,
              blockName: info.blockName,
              labelName: info.labelName,
            }}
            style={{
              size: '<p>',
              view: '-icon-',
              shade: '~light~',
              color: '(mono)',
              type: '{button}',
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
export default DefaultButton;
