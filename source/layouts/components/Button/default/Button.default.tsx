//--|🠊 Button.default.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Button.default.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//

interface InfoProps {
  type: 'button' | 'submit' | 'reset';
  text: [string, string] | string;
  style: {
    pageName: string;
    blockName: string;
    className: string;
    imageLink: string;

    fontView: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>';
    layoutView: 'left' | 'right' | 'center' | 'icon' | 'text';
    shadingView: 'dark' | 'medium' | 'light';
  };
}
const ButtonDefault: React.FC<InfoProps> = ({ type, text, style }) => {
  const pageName = style.pageName;
  const blockName = style.blockName;
  const className = style.className;
  const imageLink = style.imageLink;

  const fontView = style.fontView;
  const layoutView = style.layoutView;
  const shadingView = style.shadingView;

  const handleButton = async () => {
    console.log(`pageName: ${pageName}`);
    console.log(`blockName: ${blockName}`);
    console.log(`className: ${className}`);
    console.log(`imageLink: ${imageLink}`);
    console.log(`layoutView: ${layoutView}`);
    console.log(`shadingView: ${shadingView}`);
  };
  handleButton();

  useEffect(() => {
    /*
    let test = document.querySelector(`.default-${className}`) as HTMLButtonElement;
    console.log(test.offsetWidth);
    console.log(test.offsetHeight);
    console.log(`.default-${className}`);
    */
  }, [pageName, blockName]);

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
          className={`default-${className} icon-${shadingView} ${blockName}-${pageName}`}
          style={{
            height: iconSize(fontView),
            maskImage: `url(${imageLink})`,
            WebkitMaskImage: `url(${imageLink})`, // Ensures cross-browser support
          }}
          type={type}
        ></button>
      );
    case 'text':
      return (
        <button className={`default-${className} text-${shadingView} ${blockName}-${pageName} btn`} type={type}>
          {fontSize(fontView, text)}
        </button>
      );
  }
};
export default ButtonDefault;

const fontSize = (
  fontView: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>',
  text: [string, string] | string
) => {
  switch (fontView) {
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
    case '<p>':
      return <p>{text}</p>;
  }
};
const iconSize = (fontView: '<h1>' | '<h2>' | '<h3>' | '<h4>' | '<h5>' | '<h6>' | '<p>') => {
  switch (fontView) {
    case '<h1>':
      return '8rem';
    case '<h2>':
      return '7rem';
    case '<h3>':
      return '6rem';
    case '<h4>':
      return '5rem';
    case '<h5>':
      return '4rem';
    case '<h6>':
      return '3rem';
    case '<p>':
      return '2rem';
  }
};
