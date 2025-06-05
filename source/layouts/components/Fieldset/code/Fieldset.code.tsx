//--|🠊 Fieldset.code.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Fieldset.code.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { reactChange, reactKeydown, reactPaste } from './Fieldset_code';
import { viewBlock, viewText, axiosError, retrieveEndpoint } from '../../../scripts/landing';
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/context/EmailContext';
import { usePassword } from '../../../../modules/context/PasswordContext';
//--|🠉 Context 🠉|--//
import { stripBrackets } from '../../../scripts/landing';

interface InfoProps {
  info: {
    pageName: '[landing]' | '[overtime]' | '[ticketing]' | '[hyperlink]' | string;
    blockName: '<overlay>' | '<leftbar>' | '<rightbar>' | '<header>' | '<footer>' | '<main>' | string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
}

const FieldsetCode: React.FC<InfoProps> = ({ info }) => {
  const pageName = stripBrackets(info.pageName, '[]') as 'landing';
  const blockName = stripBrackets(info.blockName, '<>') as 'leftbar';

  //--|🠋 Local Input States 🠋|--//
  let { email, setEmail } = useEmail(); //--|🠈 Use the global email state 🠈|--//
  let { password, setPassword } = usePassword(); //--|🠈 Global Password State 🠈|--//

  //--|🠋 Action States 🠋|--//
  let [renew, setRenew] = useState('');
  let [active, setActive] = useState(['', '', '', '']);
  let [submit, setSubmit] = useState(false); //--|🠈 Prevents multiple submissions 🠈|--//
  let inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {}, [pageName, blockName]);

  let imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c82ef634aba52a2b13811924580637ceaec1712b/source/assets/svg-files/landing-page/trash-restore.svg';

  return (
    <fieldset className="code-fieldset">
      {active.map((digit, index) => (
        <input
          required
          type="text"
          key={index}
          value={digit}
          maxLength={1}
          inputMode="text"
          pattern="[A-Za-z0-9]"
          className={`digit-${index + 1}`}
          ref={(el) => (inputsRef.current[index] = el)}
          //---//
          onPaste={(e) => reactPaste(e, setActive, inputsRef)}
          onChange={(e) => reactChange(index, e.target.value, active, setActive, inputsRef)}
          onKeyDown={(e) => reactKeydown(index, e, active, inputsRef)}
        />
      ))}
    </fieldset>
  );
};
export default FieldsetCode;
