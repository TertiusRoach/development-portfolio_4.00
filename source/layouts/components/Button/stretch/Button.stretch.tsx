//--|🠊 Button.stretch.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.stretch.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { createClass, sizeIcon } from './Button_stretch';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState } from 'react';
//--|🠉 Dependencies 🠉|--//

interface TheseProps {
  info: {
    pageName: string;
    blockName: string;
    className?: string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';

    text: string;
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
const ButtonStretch: React.FC<TheseProps> = ({ info, style }) => {
  const className = createClass(style) as string;
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  const handleStretch = (className: string) => {
    let imageStatus: 'graphic' | 'missing';
    if (style.image == null) {
      imageStatus = 'missing';
    } else {
      imageStatus = 'graphic';
    }

    switch (style.size) {
      case '<h1>':
        return (
          <>
            <div className={`one_${className}_text ${imageStatus}`}>
              <h1 className={`one_${className}_text`}>
                <span>{style.text}</span>
              </h1>
            </div>
            <div className={`one_${className}_icon ${imageStatus}`}>
              <img
                className={`one_${className}_icon`}
                alt={`one_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`one_${className}_back ${imageStatus}`}>
              <span className={`one_${className}_back`}></span>
            </div>
          </>
        );
      case '<h2>':
        return (
          <>
            <div className={`two_${className}_text ${imageStatus}`}>
              <h2 className={`two_${className}_text`}>
                <span>{style.text}</span>
              </h2>
            </div>
            <div className={`two_${className}_icon ${imageStatus}`}>
              <img
                className={`two_${className}_icon`}
                alt={`two_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`two_${className}_back ${imageStatus}`}>
              <span className={`two_${className}_back`}></span>
            </div>
          </>
        );
      case '<h3>':
        return (
          <>
            <div className={`thr_${className}_text ${imageStatus}`}>
              <h3 className={`thr_${className}_text`}>
                <span>{style.text}</span>
              </h3>
            </div>
            <div className={`thr_${className}_icon ${imageStatus}`}>
              <img
                className={`thr_${className}_icon`}
                alt={`thr_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`thr_${className}_back ${imageStatus}`}>
              <span className={`thr_${className}_back`}></span>
            </div>
          </>
        );
      case '<h4>':
        return (
          <>
            <div className={`fou_${className}_text ${imageStatus}`}>
              <h4 className={`fou_${className}_text`}>
                <span>{style.text}</span>
              </h4>
            </div>
            <div className={`fou_${className}_icon ${imageStatus}`}>
              <img
                className={`fou_${className}_icon`}
                alt={`fou_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`fou_${className}_back ${imageStatus}`}>
              <span className={`fou_${className}_back`}></span>
            </div>
          </>
        );
      case '<h5>':
        return (
          <>
            <div className={`fiv_${className}_text ${imageStatus}`}>
              <h5 className={`fiv_${className}_text`}>
                <span>{style.text}</span>
              </h5>
            </div>
            <div className={`fiv_${className}_icon ${imageStatus}`}>
              <img
                className={`fiv_${className}_icon`}
                alt={`fiv_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`fiv_${className}_back ${imageStatus}`}>
              <span className={`fiv_${className}_back`}></span>
            </div>
          </>
        );
      case '<h6>':
        return (
          <>
            <div className={`six_${className}_text ${imageStatus}`}>
              <h6 className={`six_${className}_text`}>
                <span>{style.text}</span>
              </h6>
            </div>
            <div className={`six_${className}_icon ${imageStatus}`}>
              <img
                className={`six_${className}_icon`}
                alt={`six_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`six_${className}_back ${imageStatus}`}>
              <span className={`six_${className}_back`}></span>
            </div>
          </>
        );
      default:
      case '<p>':
        return (
          <>
            <div className={`par_${className}_text ${imageStatus}`}>
              <p className={`par_${className}_text`}>
                <span>{style.text}</span>
              </p>
            </div>
            <div className={`par_${className}_icon ${imageStatus}`}>
              <img
                className={`par_${className}_icon`}
                alt={`par_${className}_icon`}
                style={{
                  maskImage: `url(${style.image})`,
                  WebkitMaskImage: `url(${style.image})`,
                }}
              ></img>
            </div>
            <div className={`par_${className}_back ${imageStatus}`}>
              <span className={`par_${className}_back`}></span>
            </div>
          </>
        );
    }
  };

  useEffect(() => {
    const typeStyle = stripBrackets(style.type, '{}') as string;
    const sizeStyle = stripBrackets(style.size, '<>') as string;
    const viewStyle = stripBrackets(style.view, '--') as string;
    const shadeStyle = stripBrackets(style.shade, '~~') as string;
    const colorStyle = stripBrackets(style.color, '()') as string;

    setTimeout(() => {
      sizeIcon(style);
    }, 250);

    let reloadHandler = () => {
      setTimeout(() => {
        sizeIcon(style);
      }, 250);
    };
    window.addEventListener('resize', reloadHandler);

    return () => {
      window.removeEventListener('resize', reloadHandler);
    };
  }, [pageName, blockName]);

  return <button className={`stretch-button ${className}`}>{handleStretch(className)}</button>;
};
export default ButtonStretch;
