// Button.fade.tsx
//--|🠋 Frameworks 🠋|--//
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//--|🠉 Frameworks 🠉|--//
//--|🠋 Utilities 🠋|--//
import getSVG from '../../../../modules/utilities/getSVG';
//--|🠉 Utilities 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Design 🠋|--//
import './Button.fade.scss';
//--|🠉 Design 🠉|--//
interface FadeProps {
  text?: string;
  index?: number;
  state: 'active' | '';
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

  let mouseEnter: () => void;
  let mouseLeave: () => void;
  switch (style) {
    case 'highlight':
      mouseEnter = () => setStyle('downplay');
      mouseLeave = () => setStyle('highlight');
      return (
        <button id={setActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${viewStyle}`}>
          {renderButton(text, style, align, icon, block)}
        </button>
      );
    case 'downplay':
      mouseEnter = () => setStyle('highlight');
      mouseLeave = () => setStyle('downplay');
      return (
        <button id={setActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${viewStyle}`}>
          {renderButton(text, style, align, icon, block)}
        </button>
      );
  }
};

export default ButtonFade;

function renderButton(
  text: string | undefined,
  style: 'downplay' | 'highlight',
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string },
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) {
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
      {desktop && (
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
      {mobile && (
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
