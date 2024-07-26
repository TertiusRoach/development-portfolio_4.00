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
  const className = `${block}-${style}-${align}`;
  const stateType = `${getIdentification()}-${label} ${state}`;
  return (
    <button id={stateType} className={className}>
      {/*--|🠋 Desktop (Landscape) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
        <>
          <div style={{ zIndex: 2 }} className="button-foreground">
            <h3>{text}</h3>
          </div>
          <div style={{ zIndex: 1 }} className="button-midground">
            <img className={`${align} primary-dark`} src={`${icon.dark}`} alt={text} />
            <img className={`${align} primary-light`} src={`${icon.light}`} alt={text} />
          </div>
          <div style={{ zIndex: 0 }} className="button-background">
            <img className={`${align} primary-medium`} src={`${icon.medium}`} alt={text} />
          </div>
        </>
      )}

      {/*--|🠋 Mobile (Portrait) 🠋|--*/}
      {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
        <>
          <div style={{ zIndex: 2 }} className="button-foreground">
            <h6>{text}</h6>
          </div>
          <div style={{ zIndex: 1 }} className="button-midground"></div>
          <div style={{ zIndex: 0 }} className="button-background">
            <img className={`${align} primary-dark`} src={`${icon.dark}`} alt={text} />
            {/* <img className={`${align} primary-light`} src={`${icon.light}`} alt={text} /> */}
            {/* <img className={`${align} primary-medium`} src={`${icon.medium}`} alt={text} /> */}
          </div>
        </>
      )}
    </button>
  );

  /*
  const [viewStyle, setStyle] = useState<'downplay' | 'highlight'>(style);
  const className = `${block}-${label} ${align}`;
  const setActive = state === 'active' ? `${block}-active` : '';

  let icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };
  const handleMouseEnter = () => {
    setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');
  };

  const handleMouseLeave = () => {
    setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');
  };

  return (
    <button
      id={setActive}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} ${viewStyle}`}
    >
      {renderButton(text, style, align, icon, block)}
    </button>
  );
  */
};
export default ButtonFade;

function renderButton(
  text: string | undefined,
  style: 'downplay' | 'highlight',
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string },
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) {
  let desktopDevice: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  let mobileDevice: boolean = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      {desktopDevice && (
        <>
          <h3 className={`${align} ${block}`} style={{ zIndex: 3 }}>
            {text}
          </h3>
          <div className={`${style}`}>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </div>
        </>
      )}
      {mobileDevice && (
        <>
          <h6 className={`${align} ${block} display-6`} style={{ zIndex: 3 }}>
            {text}
          </h6>
          <div className={`${style}`}>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </div>
        </>
      )}
      <span className="button-background" style={{ zIndex: 0 }}></span>
    </>
  );
}

// Define the namespace for label-related types
namespace LabelName {
  // Utility type to exclude certain strings
  export type ExcludeStrings<T, U> = T extends U ? never : T;

  // Define the strings to exclude
  export type ExcludedLabels = 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

  // Define the allowed labels excluding the specific strings
  export type AllowedLabels = ExcludeStrings<string, ExcludedLabels> | 'home' | 'skills' | 'contact';
}

// Using the AllowedLabels type from the namespace
type labelString = LabelName.AllowedLabels;

// Utility type to exclude certain strings
// type ExcludeStrings<T, U> = T extends U ? never : T;

// Define the strings to exclude
// type ExcludedLabels = 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar';

// Define the allowed labels excluding the specific strings
// type AllowedLabels = ExcludeStrings<string, ExcludedLabels> | 'home' | 'skills' | 'contact' | string;
