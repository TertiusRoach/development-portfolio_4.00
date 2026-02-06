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
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    view: 'top-lef' | 'top-cen' | 'top-rig' | 'mid-lef' | 'mid-cen' | 'mid-rig' | 'bot-lef' | 'bot-cen' | 'bot-rig';

    type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
    role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
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
const ButtonRouting: React.FC<TheseProps> = ({
  info,
  style,
  onClick,
  onMouseEnter,
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
  const handleDefault = (info: TheseProps['info'], style: TheseProps['style']) => {
    /*
    switch (style.size) {
      case '<h1>':
        return <></>;
      case '<p>':
      default:
        return (
          <>
            <div className="fore">
              {/* <p>
                <span>{style.text}</span>
              </p>
            </div>
            <div className="mid">
              {/* <img
                alt={style.image ? 'icon' : ''}
                style={{
                  ...(style.image
                    ? {
                        maskImage: `url(${style.image})`,
                        WebkitMaskImage: `url(${style.image})`,
                      }
                    : {}),
                }}
              ></img>
            </div>
            <div className="back">{/* <canvas className="animation"></canvas></div>
          </>
        );
    }
    */
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      id={info.labelName || undefined}
      className={`routing-button ${createClass(style as TheseProps['style'])}`}
    >
      <div className="fore"></div>
      <div className="mid"></div>
      <div className="back">{/* <canvas className="animation"></canvas> */}</div>
      {/* {handleDefault(info, style)} */}
    </button>
  );
};

export default ButtonRouting;
