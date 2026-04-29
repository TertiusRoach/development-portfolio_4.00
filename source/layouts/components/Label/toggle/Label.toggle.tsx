//--|🠊 Label.toggle.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Label.toggle.scss';
//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';

import { createClass } from './Label_toggle';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
  style: {
    type: '{toggle}';
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
  };

  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  onMouseUp?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onTouchStart?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onDoubleClick?: () => void;
  onAnimationEnd?: () => void;
  onTransitionEnd?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LabelToggle: React.FC<TheseProps> = ({
  info,
  style,
  onClick,
  /*  
  onBlur,  
  onFocus,  
  onMouseUp,  
  onTouchEnd,  
  onMouseDown,  
  onTouchStart,  
  onMouseEnter,  
  onMouseLeave,  
  onDoubleClick,  
  onAnimationEnd,  
  onTransitionEnd,  
  onKeyUp,  
  onKeyDown,  
  onContextMenu,  
  */
}) => {
  //--|🠊 Identifiers 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  //--|🠊 Render Body 🠈|--\\
  const handleToggle = (infoStyle: Array<object>) => {
    return (
      <>
        <input className="event" type="checkbox" />
        <span className="switch"></span>
      </>
    );
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <label
      onClick={onClick}
      id={info.labelName || undefined}
      className={`toggle-label ${createClass(style.shade, style.color)}`}
    >
      {handleToggle([info, style])}
    </label>
  );
};

export default LabelToggle;
