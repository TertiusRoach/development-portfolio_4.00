// Button.fade.tsx
import './Button.fade.scss';
import React, { useState } from 'react';
import { getSVG } from '../../../../scripts'; // Import functions (assuming they return strings)
import { useMediaQuery } from 'react-responsive';

interface FadeProps {
  text?: string;
  index?: number;
  icon: undefined | { dark: string; medium: string; light: string };
  style: 'downplay' | 'highlight' | string;
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFade: React.FC<FadeProps> = ({ style, index, block, align, text, icon, label }) => {
  const [view, setView] = useState<'highlight' | 'downplay'>('downplay'); // Initial state
  const className = `${block}-${label}`;
  const setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined; // Conditionally apply the id only if index is 0 and block is not 'main'

  const mouseEnter = () => setView('highlight');
  const mouseLeave = () => setView('downplay');
  switch (style) {
    case 'highlight':
      return (
        <button
          id={setActive}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`${className} ${view} ${align}`}
        >
          {renderButton(icon, text, align, block)}
        </button>
      );
    case 'downplay':
      return (
        <button
          id={setActive}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`${className} ${view} ${align}`}
        >
          {renderButton(icon, text, align, block)}
        </button>
      );
  }
};

export default ButtonFade;

const renderButton = (
  icon: { dark: string; medium: string; light: string } | undefined,
  text: string | undefined,
  align: 'left' | 'center' | 'right' | string,
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) => {
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
  // const icons = getSVG(`${label}`) as { dark: string; medium: string; light: string };

  // console.log(icon);
  // // console.log(icons.dark); // Correctly logs the dark SVG URL
  // // console.log(icons.medium); // Correctly logs the medium SVG URL
  // // console.log(icons.light); // Correctly logs the light SVG URL

  if (icon !== undefined) {
    return (
      <>
        {desktop && (
          <>
            <h3 className={`${align} ${block}`} style={{ zIndex: 3 }}>
              {text}
            </h3>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </>
        )}
        {mobile && (
          <>
            <h6 className={`${align} ${block} display-6`} style={{ zIndex: 3 }}>
              {text}
            </h6>
            <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
            <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
          </>
        )}
        <span className="button-background" style={{ zIndex: 0 }}></span>
      </>
    );
  } else {
    return (
      <>
        {desktop && (
          <>
            <h3 className={`${align} ${block}`} style={{ zIndex: 3 }}>
              {text}
            </h3>
          </>
        )}
        {mobile && (
          <>
            <h6 className={`${align} ${block} display-6`} style={{ zIndex: 3 }}>
              {text}
            </h6>
          </>
        )}
        <span className="button-background" style={{ zIndex: 0 }}></span>
      </>
    );
  }
};
