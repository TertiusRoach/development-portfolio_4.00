//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { scaleImage } from './Button_default';
//--|🠉 Functions 🠉|--//

interface InfoProps {
  type: 'button' | 'submit' | 'reset';
  text: [string, string] | string;
  disabled?: boolean;
  onClick?: () => void;

  style: {
    fontSize: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    layoutView: '-left-' | '-right-' | '-center-' | '-icon-' | '-text-';
    shadingView: 'dark' | 'medium' | 'light';

    pageName: string;
    blockName: string;
    className: string;
    imageLink: string;
  };
}
const ButtonDefault: React.FC<InfoProps> = ({ type, text, style, onClick }) => {
  const pageName = style.pageName;
  const fontSize = style.fontSize;
  const blockName = style.blockName;
  const className = style.className;
  const imageLink = style.imageLink;
  const layoutView = style.layoutView;
  const shadingView = style.shadingView;

  useEffect(() => {
    /*
    console.log(`pageName: ${pageName}`);
    console.log(`fontSize: ${fontSize}`);
    console.log(`blockName: ${blockName}`);
    console.log(`className: ${className}`);
    console.log(`imageLink: ${imageLink}`);
    console.log(`layoutView: ${layoutView}`);
    console.log(`shadingView: ${shadingView}`);
    */
  }, [pageName, blockName]);

  switch (layoutView) {
    case '-left-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`default-button left-${shadingView} ${pageName}-${className} btn`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                maskImage: `url(${imageLink})`,
                width: `${scaleImage(fontSize)}rem`,
                WebkitMaskImage: `url(${imageLink})`,
              }}
            ></img>
            {scaleWords(fontSize, text)}
          </div>
        </button>
      );
    case '-right-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`default-button right-${shadingView} ${pageName}-${className} btn`}
        >
          <div className={`${blockName}`}>
            {scaleWords(fontSize, text)}
            <img
              style={{
                width: `${scaleImage(fontSize)}rem`,
                maskImage: `url(${imageLink})`,
                WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
              }}
            ></img>
          </div>
        </button>
      );
    case '-center-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`default-button center-${shadingView} ${pageName}-${className} btn`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                width: `${scaleImage(fontSize)}rem`,
                maskImage: `url(${imageLink})`,
                WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
              }}
            ></img>
            {scaleWords(fontSize, text)}
          </div>
        </button>
      );
    case '-icon-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`default-button icon-${shadingView} ${pageName}-${className} btn`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                maskImage: `url(${imageLink})`,
                height: `${scaleImage(fontSize)}rem`,
                WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
              }}
            ></img>
          </div>
        </button>
      );
    case '-text-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`default-button text-${shadingView} ${pageName}-${className} btn`}
        >
          <div className={`${blockName}`}>{scaleWords(fontSize, text)}</div>
        </button>
      );
  }
};
export default ButtonDefault;

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
