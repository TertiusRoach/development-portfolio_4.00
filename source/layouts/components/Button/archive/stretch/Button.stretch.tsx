//--|🠊 Button.stretch.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.stretch.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
import { scaleImage } from './Button_stretch';
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
const ButtonStretch: React.FC<InfoProps> = ({ type, text, style, onClick }) => {
  const pageName = style.pageName;
  const blockName = style.blockName;
  const className = style.className;

  const font = style.fontSize;
  const image = style.imageLink;
  const layout = style.layoutView;
  const shading = style.shadingView;

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

  switch (layout) {
    case '-left-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`stretch-button left-${shading} ${pageName}-${className}`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                maskImage: `url(${image})`,
                width: `${scaleImage(font)}rem`,
                WebkitMaskImage: `url(${image})`,
              }}
            ></img>
            {scaleWords(font, text)}
          </div>
        </button>
      );
    case '-right-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`stretch-button right-${shading} ${pageName}-${className}`}
        >
          <div className={`${blockName}`}>
            {scaleWords(font, text)}
            <img
              style={{
                width: `${scaleImage(font)}rem`,
                maskImage: `url(${image})`,
                WebkitMaskImage: `url(${image})`, // Ensures cross-browser support
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
          className={`stretch-button center-${shading} ${pageName}-${className}`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                maskImage: `url(${image})`,
                width: `${scaleImage(font)}rem`,
                WebkitMaskImage: `url(${image})`, // Ensures cross-browser support
              }}
            ></img>
            {scaleWords(font, text)}
          </div>
        </button>
      );
    case '-icon-':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`stretch-button icon-${shading} ${pageName}-${className}`}
        >
          <div className={`${blockName}`}>
            <img
              style={{
                maskImage: `url(${image})`,
                height: `${scaleImage(font)}rem`,
                WebkitMaskImage: `url(${image})`, // Ensures cross-browser support
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
          className={`stretch-button text-${shading} ${pageName}-${className}`}
        >
          <div className={`${blockName}`}>{scaleWords(font, text)}</div>
        </button>
      );
  }
};
export default ButtonStretch;

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
