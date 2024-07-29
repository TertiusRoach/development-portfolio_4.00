// Document #4: Button.fade.tsx
//--|🠋 Frameworks 🠋|--//
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//

//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/getFile';
//--|🠉 Utilities 🠉|--//

//--|🠋 Design 🠋|--//
import './Button.fade.scss';
import getIdentification from '../../../../modules/utilities/getIdentification';
//--|🠉 Design 🠉|--//

interface FadeProps {
  href: string;
  text: string | '';
  label: labelString;
  style: 'downplay' | 'highlight';
  axis: '<vertical>' | '<horizontal>';
  align: 'left' | 'center' | 'right' | string;
  state: 'active' | 'disabled' | 'enabled' | '';
  icon: { dark: string; medium: string; light: string };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFade: React.FC<FadeProps> = ({ icon, style, state, block, align, text, label }) => {
  const [viewStyle, setStyle] = useState<'downplay' | 'highlight'>(style);
  const className = `${block}-${viewStyle}-${align}`; // Updated to use viewStyle state
  const stateType = `${getIdentification()}-${label} ${state}`;

  // Toggle styles on mouse enter and leave
  const handleMouseEnter = () => setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');
  const handleMouseLeave = () => setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');

  return (
    <button className={className} id={stateType} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Desktop (Landscape) */}
      {useMediaQuery({ query: '(orientation: landscape)' }) && (
        <>
          <div style={{ zIndex: 2 }} className="button-foreground">
            <h3>{text}</h3>
          </div>
          <div style={{ zIndex: 1 }} className="button-midground">
            <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
            <img className={`${align} primary-light`} src={icon.light} alt={text} />
          </div>
          <div style={{ zIndex: 0 }} className="button-background">
            <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
          </div>
        </>
      )}

      {/* Mobile (Portrait) */}
      {useMediaQuery({ query: '(orientation: portrait)' }) && (
        <>
          <div style={{ zIndex: 2 }} className="button-foreground">
            <h6>{text}</h6>
          </div>
          <div style={{ zIndex: 1 }} className="button-midground">
            <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
            <img className={`${align} primary-light`} src={icon.light} alt={text} />
          </div>
          <div style={{ zIndex: 0 }} className="button-background">
            <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
          </div>
        </>
      )}
    </button>
  );
};

export default ButtonFade;

// Define the namespace for label-related types
namespace LabelName {
  // Utility type to exclude certain strings
  type ExcludeStrings<T, U> = T extends U ? never : T;

  // Define the strings to exclude
  type ExcludedLabels = 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  // Define the allowed labels excluding the specific strings
  export type AllowedLabels = ExcludeStrings<string, ExcludedLabels> | 'home' | 'skills' | 'contact';
}
// Using the AllowedLabels type from the namespace
type labelString = LabelName.AllowedLabels;
