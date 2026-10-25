//--|🠊 Button.profile.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { createClass } from './Button_profile';
import { stripBrackets, arabicToRoman, romanToArabic } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    image: string;
    shade: '~dark~' | '~light~';
    size: '<h1>' | '<h4>' | '<p>';
    view: '-square-' | '-circle-';
    type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';
  };

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonProfile: React.FC<TheseProps> = ({ info, style, onClick, onMouseEnter }) => {
  //--|🠊 Identifiers 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
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
