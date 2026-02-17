// Section.blocked.tsx
//--|🠋 Styles 🠋|--//
import './Section.blocked.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
import ListCountdown from '../../List/countdown/List.countdown';
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { stripBrackets } from '../../../scripts/landing';
import { viewBlock, viewText, axiosError } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const SectionBlocked: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'footer';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail();
  let { password, setPassword } = usePassword();

  //--|🠋 Button Action States 🠋|--//
  let [submit, setSubmit] = useState(false);
  let [attempts, setAttempts] = useState(0);

  const handleBlocked = async (event: any) => {
    console.log(event);
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <section className="blocked-section">
      <div className="blocked-text">
        <h1>Your account has been blocked.</h1>
      </div>
      <div className="blocked-branding" style={{ zIndex: 1 }}>
        <img
          src="https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d11394a960db3ea88c21e28aa8035c3f40bdad7c/source/assets/svg-files/archive-images/tertius-roach/signature-icon/primary-light.svg"
          alt="Login Logo"
        />
      </div>
      <ListCountdown info={info} />
    </section>
  );
};
export default SectionBlocked;
