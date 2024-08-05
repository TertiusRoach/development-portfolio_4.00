// Section.home.tsx
import $ from 'jquery';
import React from 'react';
import './Form.contact.scss';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';

import MenuButton from '../../Menu/button/Menu.button';
import ButtonFade from '../../Button/fade/Button.fade';

import { getSVG } from '../../../../modules/utilities/getFile';
import getScroll from '../../../../modules/utilities/getScroll';
import { toggleAside } from '../../../../modules/utilities/toggleAside';
import { toggleSection } from '../../../../modules/utilities/toggleSection';
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
  const label: string = `${labelName}` as 'home';
  const pageName: String = info.identification as String;
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
  let width = info.resolution.split('x')[0] as string;
  let height = info.resolution.split('x')[1] as string;
  return (
    <form className={`${blockName}-form`} action={`${emailAddress}`}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <input className="first-name" type="text" name="firstName" placeholder="First Name" required />

          <input className="last-name" type="text" name="lastName" placeholder="Last Name" required />

          <input className="email-address" type="email" name="email" placeholder="email@address.com" required />

          <input className="company-name" type="text" name="company" placeholder="Company (Optional)" />

          <input
            required
            type="text"
            name="company"
            className="sender-message"
            placeholder="Tell me what you're looking for. :^)"
          />

          <button className="send-button" type="submit">
            Send
          </button>
        </>
      )}
      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <input className="" type="text" name="name" required />
          <input className="" type="email" name="email" required />
          <button type="submit">Send</button>
        </>
      )}
    </form>
  );
};
export default FormContact;
function jQueryContact(pageName: String, blockName: string) {
  const containerElement = `main#${pageName}-${blockName} section.${blockName}-home`;
  // console.log(`//--|🠊 Refreshed: jQuery ${blockName} 🠈|--//`);
}
