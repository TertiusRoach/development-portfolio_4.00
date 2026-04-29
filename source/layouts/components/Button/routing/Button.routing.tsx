//--|🠊 Button.default.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Button.routing.scss';
//--|🠋 Functions 🠋|--\\
import { createClass } from './Button_routing';
import { stripBrackets } from '../../../scripts/buttons';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    image: string;
    size: '<h1>' | '<p>';
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';

    type: '{button}' | '{counter}';
    role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
  };

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;

  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;

  onBlur?: () => void;
  onFocus?: () => void;
  onMouseUp?: () => void;
  onTouchEnd?: () => void;
  onMouseDown?: () => void;
  onTouchStart?: () => void;
  onAnimationEnd?: () => void;
  onTransitionEnd?: () => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonRouting: React.FC<TheseProps> = ({
  info,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  /*  
  onBlur,  
  onFocus,  
  onMouseUp,  
  onTouchEnd,  
  onMouseDown,  
  onTouchStart,  
 
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
  const handleDefault = (info: TheseProps['info'], style: TheseProps['style']) => {};

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={info.labelName || undefined}
      className={`routing-button ${createClass(style as TheseProps['style'])}`}
    >
      <div className="fore">
        <span
          style={{
            ...(style.image ? { WebkitMaskImage: `url(${style.image})`, maskImage: `url(${style.image})` } : {}),
          }}
        >
          <img src={style.image} alt="" />
        </span>
      </div>
      <div className="mid"></div>
      <div className="back"></div>
    </button>
  );
};
export default ButtonRouting;
