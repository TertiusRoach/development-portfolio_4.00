// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Section.noir.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import { setButton } from '../../../../modules/utilities/setButton';
import getScroll from '../../../../modules/utilities/getScroll';
import { toggleAside } from '../../../../modules/utilities/toggleAside';
import { toggleSection } from '../../../../modules/utilities/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface NoirProps {
  labelName: 'noir';
  stateType: 'active' | 'enabled' | 'disabled';
  blockName: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const SectionNoir: React.FC<NoirProps> = ({ info, labelName, blockName, stateType }) => {
  const jQueryTimer: number = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'noir';
  const page: String = info.identification as String;

  useEffect(() => {
    let jQueryStart = () => {
      jQueryNoir(page, block);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryNoir(page, block), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, []);
  let desktopElements = getElements('<desktop>') as {
    buttons: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  let mobileElements = getElements('<mobile>') as {
    buttons: {
      label: 'home' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;

      text?: string;
      href?: string;
      state?: 'active' | '';
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
  return (
    <section
      className={`${blockName}-${labelName}`}
      style={{ height: `${height}px`, width: `${width}px` }}
      id={stateType === 'active' ? `${blockName}-active` : ''}
    >
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2 }}>
            <MenuButton criteria={desktopElements.criteria} input={desktopElements.buttons} />
            <span className={`${block}-description`}>
              <p>
                The world is awash in color. From the vibrant hues of nature to the artificial spectrum of human creation,
                color is ubiquitous. It is a powerful tool, capable of evoking emotions, influencing perception, and shaping
                culture. Yet, in the realm of problem-solving and innovation, a curious paradox emerges: the absence of color
                often correlates with a singular focus on function.
                <br />
                <br />
                Color, in many ways, is synonymous with aesthetics. It is the decorative layer, the icing on the cake. While
                it can enhance appeal and desirability, it can also be a distraction. By stripping away the chromatic
                elements, we are forced to concentrate on the essential elements of a design or system. It is in this
                stripped-down state that true functionality can be revealed.
                <br />
                <br />
                Consider minimalist design. Characterized by its simplicity and lack of ornamentation, it prioritizes utility
                and clarity. By eliminating superfluous elements, the focus is drawn to the core purpose of the object or
                interface. In a world saturated with visual stimuli, this absence of color can be refreshing, allowing users
                to concentrate on the task at hand without being overwhelmed.
                <br />
                <br />
                Moreover, the pursuit of function often requires a degree of detachment. Color, with its emotional
                connotations, can cloud judgment. By removing this variable, we can approach problems with a more objective
                and analytical mindset. It is in this state of neutrality that innovative solutions are more likely to
                emerge.
                <br />
                <br />
                Of course, function should not be pursued at the expense of all other considerations. User experience, for
                example, is crucial. However, by establishing a strong functional foundation, we create a platform upon which
                to build additional layers of complexity and aesthetic appeal. It is akin to constructing a sturdy house
                before decorating it.
                <br />
                <br />
                In conclusion, while color can be a valuable tool in design and communication, it should not be prioritized
                over function. By embracing a minimalist approach and focusing on the core purpose of a product or service,
                we can create solutions that are not only effective but also enduring. In a world that often values speed and
                appearance over substance, the colorless pursuit of function is a refreshing and necessary counterbalance.
              </p>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1 }}>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside>
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0 }}>
            <span className={`${block}-subject`}>
              <h3>Function over Form over Speed,</h3>
            </span>
            <span className={`${block}-title`}>
              <h3 className="display-3" data-text="The Colorless Pursuit of Function">
                The Colorless Pursuit of Functions
              </h3>
            </span>
          </div>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div id={`${labelName}-foreground`} style={{ zIndex: 2, width: Number(width) - 64, height: Number(height) - 98 }}>
            <MenuButton criteria={mobileElements.criteria} input={mobileElements.buttons} />
            <span className={`${block}-description`}>
              <p>
                The world is awash in color. From the vibrant hues of nature to the artificial spectrum of human creation,
                color is ubiquitous. It is a powerful tool, capable of evoking emotions, influencing perception, and shaping
                culture. Yet, in the realm of problem-solving and innovation, a curious paradox emerges: the absence of color
                often correlates with a singular focus on function.
                <br />
                <br />
                Color, in many ways, is synonymous with aesthetics. It is the decorative layer, the icing on the cake. While
                it can enhance appeal and desirability, it can also be a distraction. By stripping away the chromatic
                elements, we are forced to concentrate on the essential elements of a design or system. It is in this
                stripped-down state that true functionality can be revealed.
                <br />
                <br />
                Consider minimalist design. Characterized by its simplicity and lack of ornamentation, it prioritizes utility
                and clarity. By eliminating superfluous elements, the focus is drawn to the core purpose of the object or
                interface. In a world saturated with visual stimuli, this absence of color can be refreshing, allowing users
                to concentrate on the task at hand without being overwhelmed.
                <br />
                <br />
                Moreover, the pursuit of function often requires a degree of detachment. Color, with its emotional
                connotations, can cloud judgment. By removing this variable, we can approach problems with a more objective
                and analytical mindset. It is in this state of neutrality that innovative solutions are more likely to
                emerge.
                <br />
                <br />
                Of course, function should not be pursued at the expense of all other considerations. User experience, for
                example, is crucial. However, by establishing a strong functional foundation, we create a platform upon which
                to build additional layers of complexity and aesthetic appeal. It is akin to constructing a sturdy house
                before decorating it.
                <br />
                <br />
                In conclusion, while color can be a valuable tool in design and communication, it should not be prioritized
                over function. By embracing a minimalist approach and focusing on the core purpose of a product or service,
                we can create solutions that are not only effective but also enduring. In a world that often values speed and
                appearance over substance, the colorless pursuit of function is a refreshing and necessary counterbalance.
              </p>
            </span>
          </div>
          <div id={`${labelName}-midground`} style={{ zIndex: 1, width: Number(width) - 64, height: Number(height) - 98 }}>
            <aside className="profile">
              <img
                src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/main/source/assets/png-files/index-page/1280x1280%2C%20noir.png"
                alt=""
              />
            </aside>
          </div>
          <div id={`${labelName}-background`} style={{ zIndex: 0, width: Number(width) - 64, height: Number(height) - 98 }}>
            <span className={`${block}-title`}>
              <h6 className="display-6" data-text="The Colorless Pursuit of Function">
                Func over Form
              </h6>
            </span>
          </div>
        </>
      )}
    </section>
  );
};
export default SectionNoir;
function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            align: 'left',
            block: 'main',
            label: 'leftbar',
            style: 'downplay',
            text: 'View Leftbar',
            icon: getSVG('leftbar'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'center',
            label: 'overlay',
            style: 'highlight',
            text: 'View Overlay',
            icon: getSVG('overlay'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'right',
            style: 'downplay',
            label: 'rightbar',
            text: 'View Rightbar',
            icon: getSVG('rightbar'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<horizontal>',
          buildElement: '<buttons>',
        },
      } as {
        buttons: {
          text?: string;
          href?: string;
          state?: 'active' | '';
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>' | string;
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
    case '<mobile>':
      return {
        buttons: [
          {
            href: '',
            state: '',
            align: 'left',
            block: 'main',
            label: 'leftbar',
            style: 'downplay',
            text: 'View Leftbar',
            icon: getSVG('leftbar'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'center',
            label: 'overlay',
            style: 'highlight',
            text: 'View Overlay',
            icon: getSVG('overlay'),
          },
          {
            href: '',
            state: '',
            block: 'main',
            align: 'right',
            style: 'downplay',
            label: 'rightbar',
            text: 'View Rightbar',
            icon: getSVG('rightbar'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<horizontal>',
          buildElement: '<buttons>',
        },
      } as {
        buttons: {
          text?: string;
          href?: string;
          state?: 'active' | '';
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>' | string;
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
  }
}
function jQueryNoir(pageName: String, blockName: string) {
  const containerElement = `${pageName}-${blockName}`;

  $(`#${containerElement} button[id*='leftbar']`).on('click', function () {
    if (this.id.includes('leftbar')) {
      toggleAside(this.id);
    }
  });
  $(`#${containerElement} button[id*='rightbar']`).on('click', function () {
    if (this.id.includes('rightbar')) {
      toggleAside(this.id);
    }
  });
  $(`#${containerElement} button[id*="overlay"]`).on('click', function () {
    if (this.id.includes('overlay')) {
      toggleSection(this.id);
    }
  });
  console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
