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
  };
  style: {
    shade: '~dark~' | '~medium~' | '~light~';
    color: '(red)' | '(green)' | '(blue)' | '(mono)';
    type: '{button}' | '{submit}' | '{reset}' | '{disabled}';
    size: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    view: '-top-' | '-bottom-' | '-left-' | '-right-' | '-center-' | '-text-' | '-icon-';

    text: string;
    image: string;
  };
}
const ButtonDefault: React.FC<ThisProps> = ({ info, style }) => {
  const pageName = stripBrackets(info.pageName, '[]') as string;
  const blockName = stripBrackets(info.blockName, '<>') as string;

  const typeStyle = stripBrackets(style.type, '{}') as string;
  const sizeStyle = stripBrackets(style.size, '<>') as string;
  const viewStyle = stripBrackets(style.view, '--') as string;
  const shadeStyle = stripBrackets(style.shade, '~~') as string;
  const colorStyle = stripBrackets(style.color, '()') as string;

  const handleDefault = (pageName: string, blockName: string) => {};

  useEffect(() => {}, []);

  console.log(createClass(style));
  return <button className={`default-button ${createClass(style)}`}></button>;
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
