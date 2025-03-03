//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//

interface InfoProps {
  style: {
    pageName: 'landing' | 'overtime' | 'ticketing' | 'hyperlink' | string;
    blockName: string;
    className: string;
    imageLink: string;
    layoutView: 'left' | 'right' | 'center' | 'icon' | 'text';
    shadingView: 'dark' | 'medium' | 'light';
    captionView: string;
  };
}
const ButtonDefault: React.FC<InfoProps> = ({ style }) => {
  const pageName = style.pageName;
  const blockName = style.blockName;
  const className = style.className;
  const imageLink = style.imageLink;
  const layoutView = style.layoutView;
  const shadingView = style.shadingView;
  const captionView = style.captionView;

  const handleButton = async () => {
    console.log(`pageName: ${pageName}`);
    console.log(`blockName: ${blockName}`);
    console.log(`className: ${className}`);
    console.log(`imageLink: ${imageLink}`);
    console.log(`layoutView: ${layoutView}`);
    console.log(`shadingView: ${shadingView}`);
    console.log(`captionView: ${captionView}`);
  };
  handleButton();

  useEffect(() => {}, [pageName, blockName]);

  switch (layoutView) {
    case 'left':
      break;
    case 'right':
      break;
    case 'center':
      break;
    case 'icon':
      return (
        <button
          className={`default-${pageName} icon-${shadingView}`}
          style={{
            maskImage: `url(${imageLink})`,
            WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
          }}
          id={`${blockName}-${className}`}
        ></button>
      );
    default:
      return (
        <button
          className={`default-${className} text`}
          style={{
            maskImage: `url(${imageLink})`,
            WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
          }}
        >
          {captionView}
        </button>
      );
  }
};
export default ButtonDefault;
