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
    fadeView: 'find-a-link' | 'track-a-day' | 'log-a-ticket';
  };
}
const FigureRotation: React.FC<InfoProps> = ({ style }) => {
  const fadeView = style.fadeView as 'find-a-link' | 'track-a-day' | 'log-a-ticket';

  const handleRotation = async () => {};

  useEffect(() => {}, []);

  return (
    <figure className={`rotation-figure ${fadeView}`}>
      <svg className="top-right" style={{ zIndex: 3 }}></svg>
      <svg className="bot-right" style={{ zIndex: 2 }}></svg>
      <svg className="bot-left" style={{ zIndex: 1 }}></svg>
      <svg className="top-left" style={{ zIndex: 0 }}></svg>
    </figure>
  );
};
export default FigureRotation;
