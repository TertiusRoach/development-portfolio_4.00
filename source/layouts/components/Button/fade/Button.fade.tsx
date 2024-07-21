// Button.fade.tsx
import './Button.fade.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import getSVG from '../../../../utilities/getSVG';

interface FadeProps {
  text?: string;
  index?: number;
  state?: 'active' | undefined;
  icon: undefined | { dark: string; medium: string; light: string };
  style: 'downplay' | 'highlight' | string;
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const ButtonFade: React.FC<FadeProps> = ({ style, index, block, align, text, label }) => {
  let className = `${block}-${label}`;
  let [view, setView] = useState<'highlight' | 'downplay'>('downplay'); // Initial state
  let setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined; // Conditionally apply the id only if index is 0 and block is not 'main'
  let icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

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
          {renderButton(text, align, icon, block)}
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
          {renderButton(text, align, icon, block)}
        </button>
      );
  }
};

export default ButtonFade;

const renderButton = (
  text: string | undefined,
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string },
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string
) => {
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
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
};
