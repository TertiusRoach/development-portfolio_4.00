//--|🠊 DefaultButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './DefaultButton.scss';
import DivisionCarousel from '../../../../../../components/Division/Archive/carousel/Division.carousel';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';
import MenuCarousel from '../../../../../../components/Menu/archive/carousel/Menu.carousel';
import MenuSwipe from '../../../../../../components/Menu/swipe/Menu.swipe';

//--|🠋 Functions 🠋|--\\

//--|🠋 Components 🠋|--\\

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
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
          info={{
            labelName: 'default-darkside',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',

            pages: ['<h1>', '<h2>'] as Array<string>,
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

        {/* <MenuCarousel
          style={{
            axis: '[y]',
            view: '-rig-',
            color: '(mono)',
            shade: '~dark~',
            type: '{scroll}',
          }}
          cases={{
            paths: ['<h1>', '<h2>'] as Array<string>,
          }}
          info={{
            labelName: 'button',
            blockName: blockName as '<main>',
            pageName: pageName as '[components]',
          }}
        /> */}
      </section>
      <figure className={`${info.blockName}-midground`}></figure>
      <div className={`${info.blockName}-background`}>
        <h1 className="display-1">{`<DefaultButton>`}</h1>
      </div>
    </aside>
  );
};
export default DefaultButton;

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
    </>
  );
}

function ViewOne({ info }: InfoProps) {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg';

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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
            }}
          />
        </section>
      );
  }
}
function ViewTwo({ info }: InfoProps) {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg';

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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
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

              image: link as string,
            }}
          />
        </section>
      );
  }
}
