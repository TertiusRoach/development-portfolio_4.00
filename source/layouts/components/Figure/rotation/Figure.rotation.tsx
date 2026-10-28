//--|🠊 Figure.rotation.tsx 🠈|--//
//--|🠋 Styles 🠋|--//
import './Figure.rotation.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Functions 🠋|--//
//--|🠉 Functions 🠉|--//
//--|🠋 Context 🠋|--//
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
interface InfoProps {
  style: {
    fadeView: 'find-a-link' | 'track-a-day' | 'log-a-ticket' | 'test-a-fade';
  };
}
const FigureRotation: React.FC<InfoProps> = ({ style }) => {
  const fadeView = style.fadeView as 'find-a-link' | 'track-a-day' | 'log-a-ticket' | 'test-a-fade';

  const handleRotation = async () => {};

  useEffect(() => {}, []);

  return (
    <figure className={`rotation-figure ${fadeView}`}>
      <figcaption className="fade-left" style={{ zIndex: 4 }}></figcaption>

      <svg className="top-rig" style={{ zIndex: 3 }}></svg>
      <svg className="bot-rig" style={{ zIndex: 2 }}></svg>
      <svg className="bot-lef" style={{ zIndex: 1 }}></svg>
      <svg className="top-lef" style={{ zIndex: 0 }}></svg>

      <figcaption className="fade-right" style={{ zIndex: 4 }}></figcaption>
    </figure>
  );
};
export default FigureRotation;
