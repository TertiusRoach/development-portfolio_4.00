// Section.home.tsx
import './Division.working.scss';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useRef, useState } from 'react';

interface HomeProps {
  text: string;

  icon: { dark: string; medium: string; light: string };
  align: 'center' | 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left';
  info: {
    resolution: String;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | String;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | String;
  };
}
const DivisionWorking: React.FC<HomeProps> = ({ info, icon, align, text }) => {
  const divisionReference = useRef<HTMLDivElement>(null); //--|🠈 Create a reference to the div element 🠈|--//
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); //--|🠈 State to store the dimensions of the parent element 🠈|--//

  useEffect(() => {
    //--|🠋 Ensure the ref is not null before accessing the DOM 🠋|--//
    if (divisionReference.current) {
      const parentElement = divisionReference.current.parentElement as HTMLElement; //--|🠈 Get the parent element of the referenced div 🠈|--//
      if (parentElement) {
        const width = parentElement.offsetWidth; //--|🠈 Get the width of the parent element 🠈|--//
        const height = parentElement.offsetHeight; //--|🠈 Get the height of the parent element 🠈|--//
        setDimensions({ width, height }); //--|🠈 Update the state with the parent element's dimensions 🠈|--//
      }
    }
  }, [info, icon, align]); //--|🠈 Dependency array ensures this effect runs when info, icon, or align changes 🠈|--//

  return (
    //--|🠋 Apply the dimensions to the div via inline styles and set the ref 🠋|--//
    <div
      ref={divisionReference}
      className="working-division"
      style={{ height: `${dimensions.height}px`, width: `${dimensions.width}px` }}
    >
      <div className={align}>
        <h1 className="highlight display-1">{text}</h1>
      </div>
      <div className={align}>
        <img src={icon?.dark} alt="icon" />
      </div>
      <div className={align}></div>
    </div>
  );
};
export default DivisionWorking;
