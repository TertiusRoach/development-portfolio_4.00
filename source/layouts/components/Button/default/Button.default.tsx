//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Functions 🠋|--//
import { createClass } from './Button_default';
import { stripBrackets } from '../../../scripts/buttons';
//--|🠉 Functions 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect } from 'react';
//--|🠉 Dependencies 🠉|--//

interface ThisProps {
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
  info: {
    pageName: string;
    blockName: string;
    roleName?: '(established)' | '(freelancing)' | '(manager)' | '(employee)' | '(specialist)' | '(technician)' | string;
    className?: string;
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
}
const ButtonDefault: React.FC<ThisProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as string;
  const blockName = stripBrackets(info.blockName, '<>') as string;

  const handleDefault = (pageName: string, blockName: string) => {};

  useEffect(() => {
    const className = info.className as string;
    const typeStyle = stripBrackets(style.type, '{}') as string;
    const sizeStyle = stripBrackets(style.size, '<>') as string;
    const viewStyle = stripBrackets(style.view, '--') as string;
    const shadeStyle = stripBrackets(style.shade, '~~') as string;
    const colorStyle = stripBrackets(style.color, '()') as string;
  }, []);

  // console.log(`${createClass(style)}`);
  const renderButtonContent = () => {
    switch (style.size) {
      case '<h1>':
        return (
          <span className="h1">
            <h1>{style.text}</h1>
          </span>
        );
      case '<h2>':
        return (
          <span className="h2">
            <h2>{style.text}</h2>
          </span>
        );
      case '<h3>':
        return (
          <span className="h3">
            <h3>{style.text}</h3>
          </span>
        );
      case '<h4>':
        return (
          <span className="h4">
            <h4>{style.text}</h4>
          </span>
        );
      case '<h5>':
        return (
          <span className="h5">
            <h5>{style.text}</h5>
          </span>
        );
      case '<h6>':
        return (
          <span className="h6">
            <h6>{style.text}</h6>
          </span>
        );
      case '<p>':
      default:
        return (
          <span className="p">
            <p>{style.text}</p>
          </span>
        );
    }
  };

  return <button className={`default-button ${createClass(style)}`}>{renderButtonContent()}</button>;
  /*
  console.log(`Size: ${sizeStyle}`);
  console.log(`View: ${viewStyle}`);
  console.log(`Shade: ${shadeStyle}`);
  console.log(`Color: ${colorStyle}`);
  */

  /*
  console.log(`View: ${style.view}`);
  console.log(`Shade: ${style.shade}`);
  console.log(`Color: ${style.color}`);
  console.log(`Size: ${style.size}`);

  console.log(`Image: ${style.image}`);
  console.log(`Text: ${style.text}`);
  console.log(`Type: ${style.type}`);
  */
  /*
  switch (layoutView) {
    case '-top-':
      return <button></button>;
    case '-bottom-':
      return <button></button>;
    case '-left-':
      return <button></button>;
    case '-right-':
      return <button></button>;
    case '-center-':
      return <button></button>;
    case '-icon-':
      return <button></button>;
    case '-text-':
      return <button></button>;
  }
  */
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
