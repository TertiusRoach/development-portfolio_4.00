//--|🠊 RoutingButton.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './RoutingButton.scss';

//--|🠋 Functions 🠋|--\\
import { toggleColors } from './RoutingFunctions';
import { stripBrackets } from '../../../../../../../scripts';

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
      <ViewOne
        info={{
          labelName: 'one-dark',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
}
function routingLight({ info }: InfoProps) {
  return (
    <>
      <ViewOne
        info={{
          labelName: 'one-light',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
      />
    </>
  );
}

const RoutingButton: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'routing';
  const pageName = info.pageName as 'component';

  return (
    <aside className="routing-button">
      <section className={`${blockName}-foreground`}>
        <DivisionCarousel
          //--|🠊 <div class="routing-darkside-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
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

        <DivisionCarousel
          //--|🠊 <div class="routing-lightside-main_carousel-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
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
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};

let ViewOne = ({ info }: InfoProps) => {
  const shade: string = info.labelName;
  const link: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c0f9e3fa69d4960a533a7b73f357ad97886280f1';
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-up.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
              image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-down.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-down.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image: `${link}/source/assets/svg-files/archive-images/font-awesome/6.5.1/solid/star.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-right.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-up.svg` as string,
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
              image:
                `${link}/source/assets/svg-files/archive-images/font-awesome/5.13.0/solid/arrow-circle-left.svg` as string,
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
let ViewThr = ({ info }: InfoProps) => {};
let ViewSix = ({ info }: InfoProps) => {};

export default RoutingButton;
