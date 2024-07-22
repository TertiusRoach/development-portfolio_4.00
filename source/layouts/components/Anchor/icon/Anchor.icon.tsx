// Anchor.icon.tsx
import './Anchor.icon.scss';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import getSVG from '../../../../utilities/getSVG';

interface IconProps {
  href: string;
  text: string;
  state: 'active' | '';
  target: '_blank' | string;
  style: 'downplay' | 'highlight';
  align: 'left' | 'center' | 'right' | string;
  label: 'home' | 'skills' | 'contact' | string;
  icon: { dark: string; medium: string; light: string };
  block: 'header' | 'main' | 'footer' | 'overlay' | 'leftbar' | 'rightbar' | string;
}
const AnchorIcon: React.FC<IconProps> = ({ state, target, href, style, block, align, text, label }) => {
  const [viewStyle, setStyle] = useState<'highlight' | 'downplay'>(style);
  const icon = getSVG(`${label}`) as { dark: string; medium: string; light: string };

  let mouseLeave = () => setStyle('downplay');
  let mouseEnter = () => setStyle('highlight');

  let className = `${block}-${label} ${viewStyle} ${align}`;
  let setActive = state === 'active' ? `${block}-active` : '';

  switch (style) {
    case 'highlight':
      return (
        <a
          href={href}
          id={setActive}
          target={target}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={`${className}`}
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
          className={`${className} ${viewStyle} ${align}`}
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
