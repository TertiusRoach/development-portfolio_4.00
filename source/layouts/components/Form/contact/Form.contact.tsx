// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.contact.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/bin/button/Menu.button';
import ButtonFade from '../../Button/bin/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/bin/getFile';
import getScroll from '../../../../modules/utilities/bin/getScroll';
import toggleAside from '../../../../modules/utilities/bin/toggleAside';
import toggleSection from '../../../../modules/utilities/bin/toggleSection';
import DivisionWorking from '../../Division/working/Division.working';
import getIdentification from '../../../../modules/utilities/getIdentification';

interface ContactProps {
  labelName: 'contact';
  blockName: 'main' | 'overlay' | string;
  stateType: 'active' | 'enabled' | 'disabled';

  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const FormContact: React.FC<ContactProps> = ({ labelName, blockName, info }) => {
  const emailAddress = 'https://formsubmit.co/nouprajyvermaak@gmail.com';
  const jQueryTimer: number = 1000;
  const block = `${blockName}` as 'main';
  const label: string = `${labelName}` as 'contact';
  const pageName: String = info.identification as String;

  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
  useEffect(() => {
    const jQueryStart = () => {
      jQueryContact(pageName, blockName);
    };
    window.addEventListener('resize', jQueryStart);
    setTimeout(() => jQueryContact(pageName, blockName), jQueryTimer);
    return () => {
      window.removeEventListener('resize', jQueryStart);
    };
  }, [pageName, blockName]);
  let desktopElement = getElements('<desktop>') as {
    button: {
      text?: string;
      href?: string;
      label: 'send' | string;
      state: 'submit' | string;
      style: 'highlight' | 'downplay';
      align: 'left' | 'center' | 'right' | string;
      icon: { dark: string; medium: string; light: string };
      block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
    }[];
    criteria: {
      buildAxis: '<vertical>' | '<horizontal>';
      buildDesign: '<fade>' | '<icon>' | '<text>';
      buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
    };
  };
  let mobileElement = getElements('<mobile>') as {
    button: {
      label: 'send' | string;
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
  return (
    <form className={`${blockName}-form`} action={`${emailAddress}`} method="POST">
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <input className="first-name" type="text" name="firstName" placeholder="First Name" required />
          <input className="last-name" type="text" name="lastName" placeholder="Last Name" />
          <input className="email-address" type="email" name="email" placeholder="email@address.com" required />
          <input className="company-name" type="text" name="company" placeholder="Company (Optional)" />

          <textarea required name="sender-message" className="sender-message" placeholder="Sender Message" />

          <MenuButton criteria={desktopElement.criteria} input={desktopElement.button} />

          {/* <button className="send-button" type="submit">
            Send
          </button> */}
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <input className="first-name" type="text" name="firstName" placeholder="First Name" required />

          <input className="last-name" type="text" name="lastName" placeholder="Last Name" required />

          <input className="email-address" type="email" name="email" placeholder="email@address.com" required />

          <input className="company-name" type="text" name="company" placeholder="Company (Optional)" />

          <textarea
            required
            name="sender-message"
            className="sender-message"
            placeholder="Tell me what you're looking for. :^)"
          />

          <button type="submit" className="send-button">
            Send
          </button>
        </>
      )}
    </form>
  );
};
export default FormContact;

function getElements(orientation: '<desktop>' | '<mobile>') {
  switch (orientation) {
    case '<desktop>':
      return {
        button: [
          {
            href: '',
            text: 'Send',
            label: 'send',
            block: 'main',
            state: 'submit',
            align: 'left',
            style: 'downplay',
            icon: getSVG('home'),
          },
        ],
        criteria: {
          buildAxis: '<horizontal>',
          buildDesign: '<fade>',
          buildElement: '<buttons>',
        },
      } as {
        button: {
          text: string;
          href?: string;
          state: 'submit' | string;
          label: 'home' | string;
          style: 'highlight' | 'downplay';
          align: 'left' | 'center' | 'right' | string;
          icon: { dark: string; medium: string; light: string };
          block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>';
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
    case '<mobile>':
      return {
        button: [
          {
            href: '',
            text: 'Send',
            label: 'send',
            block: 'main',
            state: 'submit',
            align: 'center',
            style: 'downplay',
            icon: getSVG('home'),
          },
        ],
        criteria: {
          buildDesign: '<fade>',
          buildAxis: '<horizontal>',
          buildElement: '<buttons>',
        },
      } as {
        button: {
          text?: string;
          href?: string;
          state?: 'submit';
          label?: 'home' | string;
          style?: 'highlight' | 'downplay';
          align?: 'left' | 'center' | 'right' | string;
          icon?: { dark: string; medium: string; light: string };
          block?: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
        }[];
        criteria: {
          buildAxis: '<vertical>' | '<horizontal>';
          buildDesign: '<fade>' | '<icon>' | '<text>';
          buildElement: '<buttons>' | '<anchors>' | '<ordered>' | '<unordered>';
        };
      };
  }
}
function jQueryContact(pageName: String, blockName: string) {
  const containerElement = `main#${pageName}-${blockName} section.${blockName}-home`;
  // console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
