// Anchor.icon.tsx
import './Anchor.icon.scss';
import React, { useState } from 'react';
import { getSVG } from '../../../../scripts';
import { useMediaQuery } from 'react-responsive';

interface IconProps {
  href: string;
  text?: string;
  index?: number;
  icon: undefined | { dark: string; medium: string; light: string };
  style: 'downplay' | 'highlight' | string;
  align: 'left' | 'center' | 'right' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  state?: 'active' | undefined;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}

const AnchorIcon: React.FC<IconProps> = ({ style, index, block, align, text, label }) => {
  const [view, setView] = useState<'highlight' | 'downplay'>('downplay'); // Initial state
  const className = `${block}-${label}`;
  const setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined; // Conditionally apply the id only if index is 0 and block is not 'main'
  const icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

  const mouseEnter = () => setView('highlight');
  const mouseLeave = () => setView('downplay');
  switch (style) {
    case 'highlight':
      return (
        <a id={setActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${view} ${align}`}>
          {renderButton(text, align, icon, block)}
        </a>
      );
    case 'downplay':
      return (
        <a id={setActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${className} ${view} ${align}`}>
          {renderButton(text, align, icon, block)}
        </a>
      );
  }
};

export default AnchorIcon;

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
