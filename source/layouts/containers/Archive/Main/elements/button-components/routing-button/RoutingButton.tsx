//--|🠊 RoutingButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './RoutingButton.scss';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './RoutingFunctions';
import { loadAsset, stripBrackets, arabicToRoman, romanToArabic } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\
import LabelToggle from '../../../../../../components/Label/toggle/Label.toggle';
import ButtonRouting from '../../../../../../components/Button/routing/Button.routing';
import DivisionCarousel from '../../../../../../components/Division/carousel/Division.carousel';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}

function routingDark({ info }: InfoProps) {
  return (
    <>
      {/* <ViewOne
        info={{
          labelName: 'one-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      /> */}
      {/* <ViewFou
        info={{
          labelName: 'fou-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      /> */}
    </>
  );
}
function routingLight({ info }: InfoProps) {
  return (
    <>
      {/* <ViewOne
        info={{
          labelName: 'one-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      /> */}
      {/* <ViewFou
        info={{
          labelName: 'fou-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      /> */}
    </>
  );
}

const RoutingButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'routing';
  const pageName = info.pageName as 'component';

  let casesShow = 1 as number;
  let casesPages = ['<h1>', '<h4>', '<p>'] as Array<string>;
  return (
    <aside className="routing-button">
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="routing-darkside-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            show: casesShow,
            call: routingDark as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'routing-darkside',
            blockName: blockName as 'main',
            pageName: pageName as 'components',
          }}
        />

        <div
          className="toggle-colors"
          onClick={(event: React.MouseEvent<HTMLElement>): void => {
            toggleColors(event.currentTarget as HTMLElement);
          }}
        >
          <LabelToggle style={{ type: '{toggle}', shade: '~dark~', color: '(red)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
          <LabelToggle style={{ type: '{toggle}', shade: '~dark~', color: '(green)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
          <LabelToggle style={{ type: '{toggle}', shade: '~dark~', color: '(blue)' }} info={{ pageName: pageName, blockName: blockName, labelName: labelName }} />
        </div>

        <DivisionCarousel
          //--|🠊 <div class="routing-lightside-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            show: casesShow,
            call: routingLight as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'routing-lightside',
            blockName: blockName as 'main',
            pageName: pageName as 'components',
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
};

let ViewOne = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  switch (true) {
    case shade.includes('dark'):
      return (
        <section className={`routing-${info.blockName}_${info.labelName}`}>
          <ButtonRouting
            style={{
              size: '<h1>',
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              size: '<h1>',
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~dark~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
              type: '{button}',
              color: '(mono)',
              shade: '~light~',
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
