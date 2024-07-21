// Anchor.icon.tsx
import './Anchor.icon.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import getSVG from '../../../../utilities/getSVG';

interface IconProps {
  href: string;
  text?: string;
  index?: number;
  icon: undefined | { dark: string; medium: string; light: string };
  style: 'downplay' | 'highlight' | string;
  align: 'left' | 'center' | 'right' | string;
  target: '_blank' | string;
  label?: 'home' | 'skills' | 'contact' | string;
  state?: 'active' | undefined;
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const AnchorIcon: React.FC<IconProps> = ({ target, href, style, index, block, align, text, label }) => {
  const [view, setView] = useState<'highlight' | 'downplay'>('downplay'); // Initial state
  const className = `${block}-${label}`;
  const setActive = index === 0 && block !== 'main' ? `${block}-active` : undefined; // Conditionally apply the id only if index is 0 and block is not 'main'
  const icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

  const mouseLeave = () => setView('downplay');
  const mouseEnter = () => setView('highlight');

  switch (style) {
    case 'highlight':
      return (
        <a
          href={href}
          id={setActive}
          target={target}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`${className} ${view} ${align}`}
        >
          {renderAnchor(text, align, icon)}
        </a>
      );
    case 'downplay':
      return (
        <a
          href={href}
          id={setActive}
          target={target}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`${className} ${view} ${align}`}
        >
          {renderAnchor(text, align, icon)}
        </a>
      );
  }
};

export default AnchorIcon;

const renderAnchor = (
  text: string | undefined,
  align: 'left' | 'center' | 'right' | string,
  icon: { dark: string; medium: string; light: string }
) => {
  const desktop = useMediaQuery({ query: '(orientation: landscape)' });
  const mobile = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <>
      {desktop && (
        <>
          <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
          <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
        </>
      )}
      {mobile && (
        <>
          <img className={`${align} primary-light`} style={{ zIndex: 2 }} src={`${icon.light}`} alt={text} />
          <img className={`${align} primary-medium`} style={{ zIndex: 1 }} src={`${icon.medium}`} alt={text} />
        </>
      )}
      <span className="button-background" style={{ zIndex: 0 }}></span>
    </>
  );
};
