//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//

interface InfoProps {
  style: {
    pageName: string;
    blockName: string;
    className: string;
    imageLink: string;
    layoutView: 'left' | 'right' | 'center' | 'text' | 'icon';
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
    console.log(pageName);
    console.log(blockName);
    console.log(className);
    console.log(imageLink);
    console.log(layoutView);
    console.log(shadingView);
    console.log(captionView);
  };

  useEffect(() => {}, [pageName, blockName]);

  switch (layoutView) {
    case 'left':
      break;
    case 'right':
      break;
    case 'center':
      break;
    case 'text':
      break;
    case 'icon':
      return (
        <button
          className={`default-${className} icon`}
          style={{
            maskImage: `url(${imageLink})`,
            WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
          }}
        ></button>
      );
      break;
  }
};
export default ButtonDefault;
