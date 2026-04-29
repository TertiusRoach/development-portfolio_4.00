//--|🠊 Button.profile.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Button.profile.scss';
//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';
import { createClass } from './Button_profile';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    image: string;
    size: '<h1>' | '<p>';
    shade: '~dark~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
  };
  onClick?: () => void;
}
const ButtonProfile: React.FC<TheseProps> = ({ info, style, onClick }) => {
  //--|🠊 Identifiers 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      id={info.labelName || undefined}
      aria-disabled={style.type === '{disabled}'}
      className={`profile-button ${createClass(style as TheseProps['style'])}`}
    >
      <div className="fore">
        <span></span>
      </div>
      <div className="icon">
        <img src={style.image} alt="icon" />
      </div>
      <div className="back">
        <span></span>
      </div>
    </button>
  );
};
export default ButtonProfile;
