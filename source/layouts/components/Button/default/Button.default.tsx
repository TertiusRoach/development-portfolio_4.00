//--|🠊 Button.default.tsx 🠈|--\\
import React, { useEffect } from 'react';
//--|🠋 Styles 🠋|--\\
import './Button.default.scss';
//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../scripts/buttons';
import { createLayout, createColor, createClass, sizeIcon } from './Button_default';

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    labelName?: string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';

    text?: string;
    image?: string | null | undefined;
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

const ButtonDefault: React.FC<TheseProps> = ({
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

  //--|🠊 Class Build 🠈|--\\
  let classColor = createColor(style.shade, style.color);
  let classLayout = createLayout(style.size, style.view);

  let imageStatus: 'def' | 'alt';
  if (style.image == null) {
    imageStatus = 'alt';
  } else {
    imageStatus = 'def';
  }

  let classCreated = `${classLayout}_${classColor}_${imageStatus}`;

  //--|🠊 Render Body 🠈|--\\
  const handleDefault = (infoStyle: Array<object>) => {
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
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
                alt="icon"
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>

            <div className="back">
              <canvas className="animation"></canvas>
            </div>
          </>
        );
    }
  };

  useEffect(() => {}, [pageName, blockName]);

  return (
    <button
      onClick={onClick}
      id={info.labelName || undefined}
      className={`default-button ${classLayout}_${classColor}_${imageStatus}`}
    >
      {handleDefault([info, style])}
    </button>
  );
};

export default ButtonDefault;
