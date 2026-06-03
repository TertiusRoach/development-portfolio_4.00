//--|🠊 DefaultButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';

//--|🠋 Functions 🠋|--\\
import { copyCode, toggleColors } from './DefaultFunctions';

//--|🠋 Components 🠋|--\\
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';
import DivisionCarousel from '../../../../../../components/Division/Archive/carousel/Division.carousel';
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
function defaultDark({ info }: InfoProps) {
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
function defaultLight({ info }: InfoProps) {
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
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'component';

  return (
    <aside className="default-button">
      <section className={`${info.blockName}-foreground`}>
        <MenuSwipe
          style={{
            axis: '[y]',
            color: '(mono)',
            shade: '~dark~',
          }}
          cases={{
            show: 3,
            pages: ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>'] as Array<string>,
          }}
          info={{
            labelName: 'default-darkside',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        />
        <DivisionCarousel
          //--|🠊 <div class="darkside-main_carousel-default"/> 🠈|--\\
          style={{
            axis: '[y]',
            scope: '<two>',
          }}
          cases={{
            call: defaultDark,
          }}
          info={{
            labelName: 'default-darkside',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
        />

        <section
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
        </section>

        <MenuSwipe
          style={{
            axis: '[y]',
            color: '(mono)',
            shade: '~light~',
          }}
          cases={{
            show: 3,
            pages: ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<p>'] as Array<string>,
          }}
          info={{
            labelName: 'default-lightside',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        />
        <DivisionCarousel
          //--|🠊 <div class="lightside-main_carousel-default"/> 🠈|--\\
          style={{
            axis: '[y]',
            scope: '<two>',
          }}
          cases={{
            call: defaultLight,
          }}
          info={{
            labelName: 'default-lightside',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
        />
      </section>
      <figure className={`${info.blockName}-midground`}></figure>
      <div className={`${info.blockName}-background`}>
        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </div>
    </aside>
  );
};

let ViewOne = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h1.svg` as string,
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
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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
              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h2.svg` as string,
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
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h3.svg` as string,
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
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h4.svg` as string,
            }}
          />
        </section>
      );
  }
};
let ViewFiv = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h5.svg` as string,
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
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/h6.svg` as string,
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
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/2c4d27d5169382dad6a2bf4443d81cbe5e4423af';
  switch (true) {
    case shade.includes('dark'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
            }}
            onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
              copyCode(event.currentTarget as HTMLButtonElement);
            }}
          />
        </section>
      );
    case shade.includes('light'):
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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

              image: `${link}/source/assets/svg-files/project-pages/components-page/default-buttons/p.svg` as string,
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
