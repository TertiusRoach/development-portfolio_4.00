//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { createClass } from './Button_default';
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
    image: string;

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
const ButtonDefault: React.FC<TheseProps> = ({ info, style }) => {
  const className = createClass(style) as string;
  const blockName = stripBrackets(info.blockName, '<>') as string;
  const pageName = stripBrackets(info.pageName, '[]') as string;

  const imageLink =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3518122412fa887d7f7d7d894f05346860b8181c/source/assets/svg-files/archive-images/arabic-numerals/white-numbers/01.svg';

  const handleDefault = (pageName: string, blockName: string, className: string) => {
    // let pageName: string = `${pageName}`;
    console.log(`Button.default.tsx - Line 59`, pageName);
    console.log(`Button.default.tsx - Line 60`, blockName);

    switch (style.size) {
      case '<h1>':
        return (
          <>
            <div className={`one_${className}_text`}>
              <span className={`one_${className}_text`}>
                <h1>{style.text}</h1>
              </span>
            </div>
            <div className={`one_${className}_icon`}>
              <span className={`one_${className}_icon`}>
                <img
                  alt={`one_${className}_icon`}
                  style={{
                    maskImage: `url(${imageLink})`,
                    WebkitMaskImage: `url(${imageLink})`,
                  }}
                ></img>
              </span>
            </div>
            <div className={`one_${className}_back`}>
              <span className={`one_${className}_back`}>
                <h1
                  style={{
                    opacity: '0',
                  }}
                >
                  {style.text}
                </h1>
              </span>
            </div>
          </>
        );
      case '<h2>':
        return (
          <>
            <div className={`two_${className}_text`}>
              <span className={`two_${className}_text`}>
                <h2>{style.text}</h2>
              </span>
            </div>
            <div className={`two_${className}_icon`}>
              <span className={`two_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
      case '<h3>':
        return (
          <>
            <div className={`thr_${className}_text`}>
              <span className={`thr_${className}_text`}>
                <h3>{style.text}</h3>
              </span>
            </div>
            <div className={`thr_${className}_icon`}>
              <span className={`thr_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
      case '<h4>':
        return (
          <>
            <div className={`fou_${className}_text`}>
              <span className={`fou_${className}_text`}>
                <h4>{style.text}</h4>
              </span>
            </div>
            <div className={`fou_${className}_icon`}>
              <span className={`fou_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
      case '<h5>':
        return (
          <>
            <div className={`fiv_${className}_text`}>
              <span className={`fiv_${className}_text`}>
                <h5>{style.text}</h5>
              </span>
            </div>
            <div className={`fiv_${className}_icon`}>
              <span className={`fiv_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
      case '<h6>':
        return (
          <>
            <div className={`six_${className}_text`}>
              <span className={`six_${className}_text`}>
                <h6>{style.text}</h6>
              </span>
            </div>
            <div className={`six_${className}_icon`}>
              <span className={`six_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
      case '<p>':
      default:
        return (
          <>
            <div className={`par_${className}_text`}>
              <span className={`par_${className}_text`}>
                <p>{style.text}</p>
              </span>
            </div>
            <div className={`par_${className}_icon`}>
              <span className={`par_${className}_icon`}>{/* <img alt={className} src={imageLink} /> */}</span>
            </div>
          </>
        );
    }
  };
  /*
  let scaleImage = (pageName: string, blockName: string, className: string) => {
    let imageLink = style.image as string;

    console.log(imageLink);

    return <img alt={className} src={imageLink} />;
  };
  */

  useEffect(() => {
    const className = info.className as string;
    const typeStyle = stripBrackets(style.type, '{}') as string;
    const sizeStyle = stripBrackets(style.size, '<>') as string;
    const viewStyle = stripBrackets(style.view, '--') as string;
    const shadeStyle = stripBrackets(style.shade, '~~') as string;
    const colorStyle = stripBrackets(style.color, '()') as string;
  }, [pageName, blockName]);

  return <button className={`default-button ${className}`}>{handleDefault(pageName, blockName, className)}</button>;
};
export default ButtonDefault;

/*
const scaleWords = (
  fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
  text: [string, string] | string
) => {
  switch (fontSize) {
    case '<p>':
      return <p>{text}</p>;
    case '<h1>':
      return <h1>{text}</h1>;
    case '<h2>':
      return <h2>{text}</h2>;
    case '<h3>':
      return <h3>{text}</h3>;
    case '<h4>':
      return <h4>{text}</h4>;
    case '<h5>':
      return <h5>{text}</h5>;
    case '<h6>':
      return <h6>{text}</h6>;
  }
};
*/
