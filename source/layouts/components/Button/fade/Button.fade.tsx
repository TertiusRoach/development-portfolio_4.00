//--|🠊| Button.fade.tsx |🠈|--//
//--|🠋 Frameworks 🠋|--//
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//

//--|🠋 Utilities 🠋|--//
import { getSVG } from '../../../../modules/utilities/bin/getFile';
//--|🠉 Utilities 🠉|--//

//--|🠋 Design 🠋|--//
import './Button.fade.scss';
import getIdentification from '../../../../modules/scripts/getIdentification';
//--|🠉 Design 🠉|--//

interface FadeProps {
  href: string;
  text: string | '';
  label: labelString;
  style: 'downplay' | 'highlight';
  axis: '<vertical>' | '<horizontal>';
  align: 'left' | 'center' | 'right' | string;
  icon: { dark: string; medium: string; light: string };
  state: 'active' | 'enabled' | 'disabled' | 'submit' | string;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const ButtonFade: React.FC<FadeProps> = ({ icon, style, state, block, align, text, label }) => {
  const [viewStyle, setStyle] = useState<'downplay' | 'highlight'>(style);
  const mouseEnter = () => setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');
  const mouseLeave = () => setStyle(viewStyle === 'highlight' ? 'downplay' : 'highlight');
  const className = `${block}-${viewStyle}-${align}`;
  switch (state) {
    case 'submit':
      return (
        <button
          type={`${state}`}
          className={className}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          id={toggleState(label, state)}
        >
          {/*--|🠋 Desktop (Landscape) 🠋|--*/}
          {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
            <>
              <div style={{ zIndex: 2 }} className="button-foreground">
                <h3>{text}</h3>
              </div>
              <div style={{ zIndex: 1 }} className="button-midground">
                <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
                <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
                <img className={`${align} primary-light`} src={icon.light} alt={text} />
              </div>
              <div style={{ zIndex: 0 }} className="button-background"></div>
            </>
          )}
          {/*--|🠋 Mobile (Portrait) 🠋|--*/}
          {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
            <>
              <div style={{ zIndex: 2 }} className="button-foreground">
                {/* If width is equal to or less than, then don't return a header element. */}
                <h6 className="display-6">{text}</h6>
              </div>
              <div style={{ zIndex: 1 }} className="button-midground">
                <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
                <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
                <img className={`${align} primary-light`} src={icon.light} alt={text} />
              </div>
              <div style={{ zIndex: 0 }} className="button-background"></div>
            </>
          )}
        </button>
      );
    default:
      return (
        <button className={className} id={toggleState(label, state)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          {/*--|🠋 Desktop (Landscape) 🠋|--*/}
          {(useMediaQuery({ query: '(orientation: landscape)' }) as boolean) && (
            <>
              <div style={{ zIndex: 2 }} className="button-foreground">
                <h3>{text}</h3>
              </div>
              <div style={{ zIndex: 1 }} className="button-midground">
                <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
                <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
                <img className={`${align} primary-light`} src={icon.light} alt={text} />
              </div>
              <div style={{ zIndex: 0 }} className="button-background"></div>
            </>
          )}
          {/*--|🠋 Mobile (Portrait) 🠋|--*/}
          {(useMediaQuery({ query: '(orientation: portrait)' }) as boolean) && (
            <>
              <div style={{ zIndex: 2 }} className="button-foreground">
                {/* If width is equal to or less than, then don't return a header element. */}
                <h6 className="display-6">{text}</h6>
              </div>
              <div style={{ zIndex: 1 }} className="button-midground">
                <img className={`${align} primary-dark`} src={icon.dark} alt={text} />
                <img className={`${align} primary-medium`} src={icon.medium} alt={text} />
                <img className={`${align} primary-light`} src={icon.light} alt={text} />
              </div>
              <div style={{ zIndex: 0 }} className="button-background"></div>
            </>
          )}
        </button>
      );
  }
};
export default ButtonFade;

function toggleState(label: labelString, state: 'active' | 'enabled' | 'disabled' | 'submit' | string) {
  // let id: string;
  if (state) {
    return `${getIdentification()}-${label}-${state}`;
  } else {
    return `${getIdentification()}-${label}`;
  }
}

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
