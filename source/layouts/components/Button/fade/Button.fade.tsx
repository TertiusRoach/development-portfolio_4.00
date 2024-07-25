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
//--|🠉 Design 🠉|--//

interface FadeProps {
  text?: string;
  index?: number;
  state: 'active' | '';
  axis: 'vertical' | 'horizontal';
  style: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  icon: undefined | { dark: string; medium: string; light: string };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFade: React.FC<FadeProps> = ({ style, state, block, align, text, label }) => {
  const [viewStyle, setStyle] = useState<'downplay' | 'highlight'>(style);
  const className = `${block}-${label} ${align}`;
  const setActive = state === 'active' ? `${block}-active` : '';
  const icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

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
};
export default ButtonFade;

function renderButton(
  text: string | undefined,
  style: 'downplay' | 'highlight',
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string },
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) {
  let desktopDevice = useMediaQuery({ query: '(orientation: landscape)' });
  let mobileDevice = useMediaQuery({ query: '(orientation: portrait)' });

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
