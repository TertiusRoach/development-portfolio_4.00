//--|🠊 Button.default.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Functions 🠋|--\\
import { createClass } from './Button_default';
import { stripBrackets } from '../../../../scripts';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    type: '{button}' | '{disabled}' | '{submit}' | '{reset}';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';

    text?: string;
    image?: string | null | undefined;
    role?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)';
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  /*
  onBlur?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onFocus?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onTouchEnd?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onTouchStart?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onAnimationEnd?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onTransitionEnd?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onKeyUp?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  onKeyDown?: (event: React.MouseEvent<HTMLButtonElement>) => string | number | void;
  */
}

const ButtonDefault: React.FC<TheseProps> = ({ info, style, onClick, onMouseEnter, onMouseLeave, onDoubleClick }) => {
  //--|🠊 Identifiers 🠈|--\\
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onDoubleClick}
      id={info.labelName || undefined}
      aria-disabled={style.type === '{disabled}'}
      className={`default-button ${createClass(style as TheseProps['style'])}`}
    >
      <div className="text">
        {React.createElement(stripBrackets(style.size, '<>'), null, <span>{style.text}</span>)}
      </div>
      <div className="icon">
        <img
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
      <div className="back">
        <canvas className="animation"></canvas>
      </div>
    </button>
  );
};
export default ButtonDefault;
