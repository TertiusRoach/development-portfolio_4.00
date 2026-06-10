//--|🠊 Button.default.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Button.default.scss';

//--|🠋 Functions 🠋|--\\
import stripBrackets from '../../functions';
import { createClass } from './Button_default';

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
    color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(turquoise)';

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
function ButtonHandle(style: TheseProps['style']) {
  //--|🠊 Render Body 🠈|--\\
  switch (style.size) {
    case '<h1>':
      return (
        <>
          <div className="text">
            <h1>
              <span>{style.text}</span>
            </h1>
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
        </>
      );
    case '<h2>':
      return (
        <>
          <div className="text">
            <h2>
              <span>{style.text}</span>
            </h2>
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
        </>
      );
    case '<h3>':
      return (
        <>
          <div className="text">
            <h3>
              <span>{style.text}</span>
            </h3>
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
        </>
      );
    case '<h4>':
      return (
        <>
          <div className="text">
            <h4>
              <span>{style.text}</span>
            </h4>
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
        </>
      );
    case '<h5>':
      return (
        <>
          <div className="text">
            <h5>
              <span>{style.text}</span>
            </h5>
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
        </>
      );
    case '<h6>':
      return (
        <>
          <div className="text">
            <h6>
              <span>{style.text}</span>
            </h6>
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
        </>
      );
    case '<p>':
    default:
      return (
        <>
          <div className="text">
            <p>
              <span>{style.text}</span>
            </p>
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
        </>
      );
  }
}
const ButtonDefault: React.FC<TheseProps> = ({
  info,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onDoubleClick,
  /*  
  onBlur,  
  onFocus,  
  onMouseUp,  
  onTouchEnd,  
  onMouseDown,  
  onTouchStart,  
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
      {ButtonHandle(style)}
    </button>
  );
};

export default ButtonDefault;
